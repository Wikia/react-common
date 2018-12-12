import { connect } from 'react-redux';

import BannerNotifications from '../../components/BannerNotifications';

import { removeNotfication } from './actions';

const mapStateToProps = state => ({
    messages: state.BannerNotificationsStore.getNotifications().toJS(),
});

const mapDispatchToProps = dispatch => ({
    onClose(id) {
        // ignore what component will call
        /* istanbul ignore next */
        dispatch(removeNotfication(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BannerNotifications);
