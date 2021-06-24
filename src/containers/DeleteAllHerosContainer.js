import { deleteAllHerosAction } from "../actions";
import DeleteAllHeros from "../components/DeleteAllHeros";
import { connect } from "react-redux";

const mapStateToProps = myDatabaseState => {
  return {
    heros: myDatabaseState.heros
  };
};

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => {
    dispatch(deleteAllHerosAction());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteAllHeros);
