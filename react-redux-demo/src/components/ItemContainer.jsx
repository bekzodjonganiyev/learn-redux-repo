import React from "react";
import { connect } from "react-redux";

import { buyCake } from "../redux/cakes/cakeActions";
import { buyIceCream } from "../redux/ice_cream/iceCreamActions";

const ItemContainer = ({ item, buyItem }) => {
  return (
    <div>
      {item.name} - {item.count}
      <button onClick={() => buyItem()}>Buy {item.name}</button>
    </div>
  );
};

const mapStateToProps = (state, { cake }) => {
  const itemState = cake
    ? { count: state.cakes.numOfCakes, name: "Cake" }
    : { count: state.iceCreams.numOfIceCreams, name: "IceCream" };

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, { cake }) => {
  const dispatchFunc = cake
    ? () => dispatch(buyCake(7))
    : () => dispatch(buyIceCream(3))

  return {
    buyItem: dispatchFunc,
  };
};

export default connect(mapStateToProps, mapDispatchToProps )(ItemContainer);
