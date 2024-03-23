import React from "react";

type Product = {
    id: number;
    name: string;
    step: number;
    price: number;
}

type MyContextData = {
    
}

const MyContext = React.createContext<MyContextData>({

});

export default MyContext;