import React, { createContext, useState } from "react";
import { io } from "socket.io-client";
export const data = createContext([]);
let ws = io("http://localhost:8000");
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

let tempChatboxData = {
  msgs: [{ id: "xyz", msgs: [{ sent: "hi" }, { recieved: "hello" }] }],
};

function ContextProvider({ children }) {
  let [PeopleData, setPeopleData] = useState([]);

  function updatepeopleonline(data, ws) {
    const updatedlist = data.filter((item) => item.id != ws.id);
    setPeopleData(updatedlist);
  }

  return (
    <data.Provider
      value={{
        GroupData,
        PeopleData,
        tempChatboxData,
        ws,
        updatepeopleonline,
      }}
    >
      {children}
    </data.Provider>
  );
}

export default ContextProvider;
