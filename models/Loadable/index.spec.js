import sinon from 'sinon';

import LoadableModel from './index';

class LoadableTestModel extends LoadableModel({}, 'LoadableTestModel') {
    // nothing
}

function expectLoadingState(instance, isUinitialized, isInProgress, isCompleted, isError, isFinished) {
    expect(instance.isLoadingUninitialized()).toEqual(isUinitialized);
    expect(instance.isLoadingInProgress()).toEqual(isInProgress);
    expect(instance.isLoadingCompleted()).toEqual(isCompleted);
    expect(instance.isLoadingError()).toEqual(isError);
    expect(instance.isLoadingFinished()).toEqual(isFinished);
}

test('Loadable\'s setting and loading states works correctly', () => {
    let instance = LoadableTestModel.empty();

    expectLoadingState(instance, true, false, false, false, false);

    instance = instance.withLoadingInProgress();
    expectLoadingState(instance, false, true, false, false, false);

    instance = instance.withLoadingCompleted();
    expectLoadingState(instance, false, false, true, false, true);

    instance = instance.withLoadingError();
    expectLoadingState(instance, false, false, false, true, true);
});

test('Loadable\'s setting incorrect state does nothing', () => {
    let instance = LoadableTestModel.empty();

    const consoleStub = sinon.stub(console, 'error');

    expect(instance.isLoadingUninitialized()).toEqual(true);
    instance = instance._withLoadingState('foo');
    expect(instance.isLoadingUninitialized()).toEqual(true);
    expect(consoleStub.callCount).toEqual(1);
    expect(consoleStub.getCall(0).args[0]).toMatch(/^LoadableModel\._withLoadingState called with incorrect param: "foo"/);

    consoleStub.restore();
});
