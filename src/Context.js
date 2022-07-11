import { useState, createContext } from 'react';

export const Carty = createContext();

const Context = ({ children }) => {
    const [cart , setCart] = useState([]);


    return <Carty.Provider value={{cart, setCart}}>{children}</Carty.Provider>
}
export default Context;