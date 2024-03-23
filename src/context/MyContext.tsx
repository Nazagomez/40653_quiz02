
import React, { createContext, useContext, useState } from 'react';

const initialState = {
  products: [
    { id:1, step:1, name: 'Mouse', price: 60 },
    { id:2, step:1, name: 'Monitor', price: 70 },
    { id:4, step:2, name: 'Keyboard', price: 80 },
    { id:5, step:2, name: 'Headset', price: 90 },
    { id:6, step:3, name: 'Tablet', price: 100 },
    { id:7, step:3, name: 'Hub', price: 110 }
  ],
  currentStep: 1, 

  
  
};

export const MyContext = createContext(initialState);

export const useMyContext = () => useContext(MyContext);

export const MyProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  type Product = {
    id: number;
    name: string;
    step: number;
    price: number;
}


  return (
    <MyContext.Provider value={state}>
      {children}
    </MyContext.Provider>
  );
};
