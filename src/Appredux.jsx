import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React from 'react';
import {increment, decrement } from './actions/actionstype';


const App = () => {
  let count = useSelector(state => state.changeNumber)
  let dispatch = useDispatch()
  return ( 
    <div className="App"> 
    <h1 className='a'>INCREMENT AND DECREMENT USING <span className='redux'> REDUX</span></h1>
    <div className='input-group mt-5 w-50 mx-auto'>
      <span onClick={()=>dispatch(increment())} className='input-group-text bg-success text-white fs-4 cursor-ptr'>Increament</span>
      <input type="text" className='form-control text-center fs-4' aria-label='Amount()' value={count} readOnly />
      <span onClick={()=> dispatch(decrement())} className='input-group-text bg-danger text-white fs-4 cursor-ptr'>Decreament</span>
    </div>
    </div>
  );
}

export default App;
