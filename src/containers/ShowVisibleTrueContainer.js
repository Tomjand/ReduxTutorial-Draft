import { showVisibleTrueAction } from "../actions";
import ShowVisibleTrue from "../components/ShowVisibleTrue";
import { connect } from "react-redux";

const mapStateToProps = myDatabaseState => {
  return {
    heros: myDatabaseState.heros
  };
};

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => {
    dispatch(showVisibleTrueAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowVisibleTrue);
