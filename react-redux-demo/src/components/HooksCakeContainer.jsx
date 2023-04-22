import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake, addCake } from '../redux/cakes/cakeActions';

const HooksCakeContainer = () => {
    const getCakes = (stata) => stata.cakes
    const cakes = useSelector(getCakes)
    const dispatch = useDispatch()
    return (
      <div>
        <h4>Number of cakes with Hooks = {cakes.numOfCakes}</h4>
        <button onClick={() => dispatch(buyCake(1))}>Buy cake(1)</button>
        <button onClick={() => dispatch(addCake(1))}>Add cake(1)</button>
      </div>
    );
  }
export default HooksCakeContainer