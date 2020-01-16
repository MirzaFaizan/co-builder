import React, { useReducer, useState, useEffect } from "react";
import jwt from 'jsonwebtoken';

let reducer = (info, newInfo) => {
    if (newInfo === null) {
        localStorage.removeItem("info");
        return initialState;
    }
    return { ...info, ...newInfo };
};
    

const initialState = {
    name: "John Smith",
    age: 52,
    email: "john.smith@gmail.com"
};
const localState = JSON.parse(localStorage.getItem("info"));
const InfoContext = React.createContext();

function InfoProvider(props) {
    const [info, setInfo] = useReducer(reducer, localState || initialState);
    useEffect(() => {
        localStorage.setItem("info", JSON.stringify(info));
    }, [info]);
    return (
        <InfoContext.Provider value={{ info, setInfo }}>
            {props.children}
        </InfoContext.Provider>
    );
}

export { InfoContext, InfoProvider };