import { isVignetteUrl, isVignetteId, VignetteHelper, vignette } from './vignette';

const DEFAULT_BASE_IMAGE = 'https://vignette.wikia.com/541b323b-a3c2-4d4f-be1f-500cf13573b8';

describe('isVignetteUrl works properly', () => {
    const testData = {
        'https://vignette.wikia.nocookie.net/541b323b-a3c2-4d4f-be1f-500cf13573b8/smart/width/5/height/5': true,
        'https://vignette.wikia.com/541b323b-a3c2-4d4f-be1f-500cf13573b8': true,
        'http://vignette.wikia-dev.pl/541b323b-a3c2-4d4f-be1f-500cf13573b8': true,
        'http://static.wikia-dev.us/541b323b-a3c2-4d4f-be1f-500cf13573b8': true,
        'http://static.wikia-dev.us/not-an-id': false,
        'http://static.wikia-dev.us/': false,
        'https://wikia.com/541b323b-a3c2-4d4f-be1f-500cf13573b8': false,
        'https://static.wikia.com/541b323b-xxxx-4d4f-be1f-500cf13573b8': false,
        '': false,
    };

    Object.keys(testData).forEach((key) => {
        test(`isVignetteUrl: "${key}" => ${testData[key]}`, () => {
            expect(isVignetteUrl(key)).toBe(testData[key]);
        });
    });
});

describe('isVignetteId works properly', () => {
    const testData = {
        '541b323b-a3c2-4d4f-be1f-500cf13573b8': true,
        'some-random-string': false,
        '': false,
    };

    Object.keys(testData).forEach((key) => {
        test(`isVignetteId: "${key}" => ${testData[key]}`, () => {
            expect(isVignetteId(key)).toBe(testData[key]);
        });
    });
});

test('VignetteHelper can be initialized', () => {
    const helperWithoutParams = vignette(DEFAULT_BASE_IMAGE);

    expect(helperWithoutParams.baseImage).toEqual(DEFAULT_BASE_IMAGE);
    expect(helperWithoutParams.getParams()).toEqual('');

    const helperWithParams = new VignetteHelper(`${DEFAULT_BASE_IMAGE}/smart/width/5/height/5`);
    expect(helperWithParams.baseImage).toEqual(DEFAULT_BASE_IMAGE);
    expect(helperWithParams.getParams()).toEqual('/smart/width/5/height/5');
});

test('VignetteHelper can be cloned', () => {
    const helperOne = new VignetteHelper(DEFAULT_BASE_IMAGE);
    const helperOneParams = helperOne.getParams();

    expect(helperOne.clone().withSmart(20, 10).getParams()).toEqual('/smart/width/20/height/10');
    expect(helperOne.getParams()).toEqual(helperOneParams);
});

test('VignetteHelper can handle all the different modes', () => {
    const allModes = [
        '/smart/width/5/height/5',
        '/top-crop/width/1000/height/5',
        '/thumbnail-down/width/20/height/30',
        '/thumbnail/width/10/height/20',
        '/thumbnail-down/width/20/height/30',
        '/scale-to-width/100',
        '/scale-to-width-down/200',
        '/scale-to-height-down/50',
    ];

    const helper = new VignetteHelper(DEFAULT_BASE_IMAGE);

    allModes.forEach((mode) => {
        helper.set(`${DEFAULT_BASE_IMAGE}${mode}`);

        expect(helper.getParams()).toEqual(mode);
    });
});

test('VignetteHelper ignores bad method', () => {
    const helper = new VignetteHelper(DEFAULT_BASE_IMAGE);

    expect(helper.withTransform({ method: 'foo' }).getParams()).toEqual('');
});

test('VignetteHelper can handle all the with* methods', () => {
    const helper = new VignetteHelper(DEFAULT_BASE_IMAGE);

    expect(helper.withScaleToHeight(10).getParams()).toEqual('/scale-to-height-down/10');
    expect(helper.withScaleToWidth(20).getParams()).toEqual('/scale-to-width-down/20');
    expect(helper.withScaleToWidth(30, true).getParams()).toEqual('/scale-to-width/30');

    expect(helper.withThumbnail(150, 100).getParams()).toEqual('/thumbnail-down/width/150/height/100');
    expect(helper.withThumbnail(250, 200, true).getParams()).toEqual('/thumbnail/width/250/height/200');

    expect(helper.withTopCrop(100, 10).getParams()).toEqual('/top-crop/width/100/height/10');
    expect(helper.withSmart(5, 6).getParams()).toEqual('/smart/width/5/height/6');

    // auto's special case because it's either scale (if there's only width or height present) or thumbnail (when there are both)
    expect(helper.withAuto(200).getParams()).toEqual('/scale-to-width-down/200');
    expect(helper.withAuto(undefined, 100).getParams()).toEqual('/scale-to-height-down/100');
    expect(helper.withAuto(200, 100).getParams()).toEqual('/thumbnail-down/width/200/height/100');
});
