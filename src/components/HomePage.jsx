import React, { use, useContext, useEffect, useState } from "react";
import style from "../css/HomePage.module.css";
import { TiHome } from "react-icons/ti";
import { AiFillMessage } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { LiaUsersCogSolid } from "react-icons/lia";
import ChatBox from "./ChatBox";
import OnlinePeopleAndGroups from "./OnlinePeopleAndGroups";
import { data } from "../store/ContextProvider";
function HomePage() {
  let { ws, updatepeopleonline, UpdateChatfromServer, updateChatOfid } =
    useContext(data);
  const [currentChat, setCurrentChat] = useState({ id: null });

  const openChatPanelhandler = (data) => {
    setCurrentChat(data);
  };
  useEffect(() => {
    updateChatOfid(currentChat.id);
  }, [currentChat.id]);
  useEffect(() => {
    if (!ws) return;
    const handleupdateUserList = (data) => {
      updatepeopleonline(data, ws);
    };
    const handleMessagep2pFromServer = (data) => {
      let id = data.id;
      UpdateChatfromServer(data);
      console.log(
        `id from server ${id}, id for current user ${currentChat.id}`
      );
      if (id == currentChat.id) {
        updateChatOfid(id);
      }
    };

    ws.on("updateUserList", handleupdateUserList);
    ws.on("Messagep2pFromServer", handleMessagep2pFromServer);

    return () => {
      ws.off("updateUserList", handleupdateUserList);
      ws.off("Messagep2pFromServer", handleMessagep2pFromServer);
    };
  }, [ws, currentChat]);

  ws.on("welcome", (data) => {
    updatepeopleonline(data, ws);
  });

  return (
    <div className={style.pageHolder}>
      <header className={style.NavArea}>
        <div className={style.upperSection}>
          <ul>
            <li className={style.logo}>
              <img
                height="80px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_tMDmGpdUANiBhrYP30GLPrVvcNZed4sTeA&s"
                alt="avatar"
              />
            </li>
            <li>
              <TiHome className={style.icons} />
            </li>
            <li>
              <AiFillMessage className={style.icons} />
            </li>
            <li>
              <FaPlus className={style.icons} />
            </li>
          </ul>
        </div>
        <div className={style.lowerSection}>
          <span>
            <LiaUsersCogSolid className={style.icons} />
          </span>
        </div>
      </header>
      <div className={style.onlinePeople}>
        <OnlinePeopleAndGroups
          openChatPanelhandler={openChatPanelhandler}
        ></OnlinePeopleAndGroups>
      </div>
      <div className={style.chatSection}>
        {!currentChat ? (
          <div>
            <h1>chat now!</h1>
          </div>
        ) : (
          <ChatBox currentChat={currentChat} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
