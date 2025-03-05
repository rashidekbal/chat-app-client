import React, { createContext, useState } from "react";
import { io } from "socket.io-client";
import {
  updateLocalStorageMesaageFromServer,
  updateLocalStorageMesaageFromUserItself,
} from "../lib/MessageUpdateHandler.js";
export const data = createContext([]);
let ws = io("http://localhost:8000");

//temporary group data for chat app.
let GroupData = [
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLWKNduCw_8jK8-lg0p1K1t6X3ATRkhOkDg&s",
    Name: "randibazi",
    placeHolder: "something",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLWKNduCw_8jK8-lg0p1K1t6X3ATRkhOkDg&s",
    Name: "randibazi",
    placeHolder: "something",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLWKNduCw_8jK8-lg0p1K1t6X3ATRkhOkDg&s",
    Name: "randibazi",
    placeHolder: "something",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLWKNduCw_8jK8-lg0p1K1t6X3ATRkhOkDg&s",
    Name: "randibazi",
    placeHolder: "something",
  },
];

function ContextProvider({ children }) {
  let [PeopleData, setPeopleData] = useState([]); //online people list
  let [chatData, setChatData] = useState({ msgs: [{ null: null }] }); //chat box data boiler plate
  //function runs every time someone connects or disconnects
  function updatepeopleonline(data, ws) {
    const updatedlist = data.filter((item) => item.id != ws.id);
    setPeopleData(updatedlist);
  }
  //function for updating chat in localStroage initiated by server
  function UpdateChatfromServer(data) {
    updateLocalStorageMesaageFromServer(data);
  }
  // function for updating chat in localStorage initiated by user
  function UpdateChatFromUser(data) {
    updateLocalStorageMesaageFromUserItself(data);
    updateChatOfid(data.id);
  }
  function updateChatOfid(id) {
    let temp = localStorage.getItem(id);
    if (!temp) {
      setChatData({ msgs: [{ null: null }] });
    } else {
      setChatData(JSON.parse(temp));
    }
  }

  return (
    <data.Provider
      value={{
        GroupData, //group list
        PeopleData, //online people list
        ws, //websocket instance
        updatepeopleonline, //function for updating people online list
        chatData, // chat box data
        UpdateChatfromServer, //handle chat data from server
        UpdateChatFromUser, //handle msg sent by user to user
        updateChatOfid, //update chat data for showing on screen
      }}
    >
      {children}
    </data.Provider>
  );
}

export default ContextProvider;
