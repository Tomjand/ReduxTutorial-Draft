import { showNoSelectedAction } from "../actions";
import ShowNoSelected from "../components/ShowNoSelected";
import { connect } from "react-redux";

const mapStateToProps = myDatabaseState => {
  return {
    heros: myDatabaseState.heros
  };
};

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => {
    dispatch(showNoSelectedAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowNoSelected);
