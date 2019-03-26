import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import clone from 'lodash/clone';

import ImagePreloader from './index';

const image = 'http://vignette.wikia-dev.us/22b12324-ab36-4266-87c9-452776157205';
const image2 = 'http://foo.jpg';

test('ImagePreloader calls children and onChange when state changes', () => {
    const childrenFunc = sinon.stub().returns(<span>Foo</span>);
    const wrapper = mount(
        <ImagePreloader src={image}>
            {childrenFunc}
        </ImagePreloader>
    );

    const defaultState = {
        error: null,
        src: null,
        srcSet: null,
        state: ImagePreloader.STATE.PENDING,
    };
    const expectedState = clone(defaultState);

    // default render
    expect(childrenFunc.callCount).toEqual(1);
    expect(childrenFunc.getCall(0).args[0]).toEqual(expectedState);

    // toggle success
    wrapper.instance().handleSuccess();
    expectedState.state = ImagePreloader.STATE.SUCCESS;
    expectedState.src = image;

    expect(childrenFunc.callCount).toEqual(2);
    expect(childrenFunc.getCall(1).args[0]).toEqual(expectedState);

    // toggle error
    wrapper.instance().handleError('Foo error');
    expectedState.state = ImagePreloader.STATE.ERROR;
    expectedState.error = 'Foo error';

    expect(childrenFunc.callCount).toEqual(3);
    expect(childrenFunc.getCall(2).args[0]).toEqual(expectedState);

    // force props update
    wrapper.setProps({ src: image2, srcSet: image2 });
    expectedState.state = ImagePreloader.STATE.PENDING;

    expect(childrenFunc.callCount).toEqual(4);
    expect(childrenFunc.getCall(3).args[0]).toEqual(expectedState);

    // toggle success
    wrapper.instance().handleSuccess();
    expectedState.state = ImagePreloader.STATE.SUCCESS;
    expectedState.src = image2;

    expect(childrenFunc.callCount).toEqual(5);
    expect(childrenFunc.getCall(4).args[0]).toEqual(expectedState);

    // force props update (with src=null)
    wrapper.setProps({ src: null, srcSet: null });
    expectedState.state = ImagePreloader.STATE.PENDING;
    expectedState.src = null;

    expect(childrenFunc.callCount).toEqual(6);
    expect(childrenFunc.getCall(5).args[0]).toEqual(expectedState);

    // force unmount, nothing new is called
    wrapper.unmount();
    expect(childrenFunc.callCount).toEqual(6);

    // force re-mount, child is called with default state
    wrapper.mount();
    expect(childrenFunc.callCount).toEqual(7);
    expect(childrenFunc.getCall(6).args[0]).toEqual(defaultState);
});
// test('ImagePreloader works', () => {
//     const childrenFunc = sinon.stub().returns(<span>Foo</span>);
//     const onChangeFunc = sinon.stub();

//     const wrapper = mount(
//         <ImagePreloader src={image} onChangeFunc={onChangeFunc}>
//             {childrenFunc}
//         </ImagePreloader>
//     );

//     const instance = wrapper.instance();

//     expect(onChangeFunc.callCount).toEqual(0);

//     const handleStartFetchStub = sinon.stub(instance, 'handleStartFetch');
//     const handleStopFetchStub = sinon.stub(instance, 'handleStopFetch');

//     wrapper.unmount();
//     expect(handleStopFetchStub.callCount).toEqual(1);
//     wrapper.mount();

//     expect(onChangeFunc.callCount).toEqual(0);
//     expect(childrenFunc.callCount).toEqual(2);
//     expect(handleStartFetchStub.callCount).toEqual(0);
//     expect(handleStopFetchStub.callCount).toEqual(1);

//     wrapper.props({ src: 'https://fake.image.jpg' });

//     expect(onChangeFunc.callCount).toEqual(0);
//     expect(childrenFunc.callCount).toEqual(2);
//     expect(handleStartFetchStub.callCount).toEqual(1);
//     expect(handleStopFetchStub.callCount).toEqual(1);


//     // global.window.requestAnimationFrame = sinon.spy();

//     // wrapper.instance().componentDidMount();
//     // expect(requestAnimationFrame.callCount).toEqual(1);

//     // global.window.requestAnimationFrame.restore();
// });
