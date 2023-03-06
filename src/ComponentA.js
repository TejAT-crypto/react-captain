import React from 'react';
import { Provider } from 'react-redux';
import store from './reducestore';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

function ComponentA() {
  return (
  <Provider store = {store}>
  <ComponentB /> 
  <ComponentC />
  </Provider>
  )
}

export default ComponentA;