import React from "react";
import { connect } from "react-redux";

import { buyIceCream, addIceCream } from "../redux/ice_cream/iceCreamActions";

const IceCreamContainer = ({ numOfIceCreams, buyIceCream, addIceCream }) => {
  return (
    <div>
      <h4>Number of iceCreams with connect HOC = {numOfIceCreams}</h4>
      <button onClick={() => buyIceCream()}>Buy iceCream(5)</button>
      <button onClick={() => addIceCream()}>Add iceCream(5)</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCreams.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream(5)),
    addIceCream: () => dispatch(addIceCream(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
