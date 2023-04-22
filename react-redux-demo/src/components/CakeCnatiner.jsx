import React from "react";
import { connect } from "react-redux";

import { buyCake, addCake } from "../redux/cakes/cakeActions";

const CakeCnatiner = ({ numOfCakes, buyCake, addCake }) => {
  return (
    <div>
      <h4>Number of cakes with connect HOC = {numOfCakes}</h4>
      <button onClick={() => buyCake()}>Buy cake(5)</button>
      <button onClick={() => addCake()}>Add cake(5)</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cakes.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake(5)),
    addCake: () => dispatch(addCake(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeCnatiner);
