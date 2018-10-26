import { connect } from 'react-redux';
import { getPurchaseHistoryItems } from 'src/selectors/purchaseHistory';
import PurchaseHistory from './purchaseHistory';
import actions, { getPurchaseHistory } from 'src/actions/purchaseHistory';

const mapStateToProps = state => {
    return {
        items: getPurchaseHistoryItems(state)
    };
};

const mapDispatchToProps = {
    getPurchaseHistory,
    resetPurchaseHistory: actions.reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PurchaseHistory);
