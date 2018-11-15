import { showAllHerosAction } from "../actions";
import ShowAllHeros from "../components/ShowAllHeros";
import { connect } from "react-redux";

const mapStateToProps = myDatabaseState => {
  return {
    heros: myDatabaseState.heros
  };
};

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => {
    dispatch(showAllHerosAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAllHeros);
