import { filterAction } from "../actions/herosActions"; //zmienic na obiekt akcji
import BtnFilter from "../components/BtnFilter"; //zmienic
import { connect } from "react-redux";

const mapStateToProps = (myDatabaseState, ownProps) => {
  return {
    //heros: myDatabaseState.heros
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onButtonClick: () => {
    dispatch(filterAction(ownProps.filter)); //zmienic
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BtnFilter);
