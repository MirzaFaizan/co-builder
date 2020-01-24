import React, { useReducer, useState, useEffect } from "react";
import setAuthorizationToken from './SetAuthHeaders';
let reducer = (info, newInfo) => {
    if (newInfo === null) {
        localStorage.removeItem("info");
        return initialState;
    }
    return { ...info, ...newInfo };
};

const initialState = {
    userEmail: "",
    userId: "",
    username: "",
    userAvatar: "",
    pintrestStatus: '',
    pinterestUserName: '',
    pinterestBoardName: '',
    pinterestFirstTime: '',
};
const localState = JSON.parse(localStorage.getItem("info"));
const InfoContext = React.createContext();
setAuthorizationToken();
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