import { showSelectedAction } from "../actions";
import ShowSelected from "../components/ShowSelected";
import { connect } from "react-redux";

const mapStateToProps = myDatabaseState => {
  return {
    heros: myDatabaseState.heros
  };
};

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => {
    dispatch(showSelectedAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowSelected);
