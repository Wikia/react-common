import * as helper from './helper';

test('getUuid returns false for non-uuid urls', () => {
  const uuid = helper.getUuid('whatever.jpg');

  expect(uuid).toBe(false);
});

test('getUuid returns uuid from vignette url', () => {
  const source = 'https://vignette.wikia.nocookie.net/541b323b-a3c2-4d4f-be1f-500cf13573b8';
  const uuid = helper.getUuid(source);

  expect(uuid).toBe('541b323b-a3c2-4d4f-be1f-500cf13573b8');
});

test('getUuid returns uuid from vignette uuid', () => {
  const uuid = helper.getUuid('541b323b-a3c2-4d4f-be1f-500cf13573b8');

  expect(uuid).toBe('541b323b-a3c2-4d4f-be1f-500cf13573b8');
});

test('getVignetteParams should return proper params for top-crop mode', () => {
  const topCrop = helper.getVignetteParams({
    method: 'top-crop',
    width: 200,
    height: 100,
  });

  expect(topCrop).toBe('/top-crop/width/200/height/100');
});

test('getVignetteParams should return proper params for scale mode', () => {
  const params = {method: 'scale'};
  const scaleH = helper.getVignetteParams({
    ...params,
    height: 100,
  });
  const scaleW = helper.getVignetteParams({
    ...params,
    width: 200,
  });
  const scaleWUpscaling = helper.getVignetteParams({
    ...params,
    width: 200,
    allowUpscaling: true,
  });

  expect(scaleH).toBe('/scale-to-height-down/100');
  expect(scaleW).toBe('/scale-to-width-down/200');
  expect(scaleWUpscaling).toBe('/scale-to-width/200');
});

test('getVignetteParams should return proper params for thumbnail mode', () => {
  const params = {
    method: 'thumbnail',
    width: 200,
    height: 100,
  };
  const thumbnail = helper.getVignetteParams(params);
  const thumbnailUpscaling = helper.getVignetteParams({
    ...params,
    allowUpscaling: true,
  });

  expect(thumbnail).toBe('/thumbnail-down/width/200/height/100');
  expect(thumbnailUpscaling).toBe('/thumbnail/width/200/height/100');
});

test('getVignetteParams should return proper params for AUTO mode', () => {
  // both width and height are present -> thumbnail mode
  const params = {
    width: 200,
    height: 100,
  };
  const autoWH = helper.getVignetteParams(params);
  const autoWHUpscaling = helper.getVignetteParams({
    ...params,
    allowUpscaling: true,
  });

  // something is not present -> scaleWUpscaling mode
  const autoH = helper.getVignetteParams({
    height: 100,
  });
  const autoW = helper.getVignetteParams({
    width: 200,
  });
  const autoWUpscaling = helper.getVignetteParams({
    width: 200,
    allowUpscaling: true,
  });

  expect(autoWH).toBe('/thumbnail-down/width/200/height/100');
  expect(autoWHUpscaling).toBe('/thumbnail/width/200/height/100');
  expect(autoH).toBe('/scale-to-height-down/100');
  expect(autoW).toBe('/scale-to-width-down/200');
  expect(autoWUpscaling).toBe('/scale-to-width/200');
});
