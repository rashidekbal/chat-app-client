import React, { useContext, useEffect, useState } from "react";
import style from "../css/ChatBox.module.css";
import { FiPhone } from "react-icons/fi";
import { LuVideo } from "react-icons/lu";
import ChatBubble from "./ChatBubble";
import UserChatBubble from "./UserChatBubble";
import { ImAttachment } from "react-icons/im";
import { FaMicrophone } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { CiCamera } from "react-icons/ci";
import { IoSend } from "react-icons/io5";
import { data } from "../store/ContextProvider";
function ChatBox({ currentChat }) {
  const [msgTyped, changeMsgTyped] = useState(false);
  const [textMsg, changeTextMsg] = useState();
  let { tempChatboxData, ws } = useContext(data);
  let [indexOfCurrentUser, changeIndexOfUser] = useState();

  function finndCurrentUserIndex() {
    for (let i = 0; i < tempChatboxData.msgs.length; i++) {
      if (tempChatboxData.msgs[i].id == currentChat.id) {
        changeIndexOfUser(i);
        break;
      }
    }
  }

  const handelTextMsgSent = () => {
    finndCurrentUserIndex();
    ws.emit("Messagep2pFromClient", { msg: textMsg, id: currentChat.id });
    changeTextMsg("");
    changeMsgTyped(false);
  };
  const upcomming = () => {
    alert("feature comming soon");
  };
  return (
    <div className={style.mainFrame}>
      <div className={style.innerFrame}>
        <header className={style.chatHeader}>
          <section className={style.hleft}>
            <span className={style.userLogo}>
              <img height="80px" src={currentChat.imgSrc} alt="avatar" />
            </span>
            <span className={style.Username}>{currentChat.Name}</span>
          </section>
          <section className={style.hright}>
            <span>
              <FiPhone
                className={style.icons}
                onClick={() => {
                  upcomming();
                }}
              />
            </span>
            <span>
              <LuVideo
                className={style.icons}
                onClick={() => {
                  upcomming();
                }}
              />
            </span>
          </section>
        </header>
        <div className={style.chat_area}>
          {tempChatboxData.msgs[indexOfCurrentUser] &&
            tempChatboxData.msgs[indexOfCurrentUser].msgs.map((item) =>
              item.recieved ? (
                <ChatBubble data={item.recieved} />
              ) : (
                item.sent && <UserChatBubble data={item.sent} />
              )
            )}
        </div>
        <div className={style.inputArea}>
          <div className={style.attachment}>
            <ImAttachment
              className={style.icons_2}
              onClick={() => {
                upcomming();
              }}
            />
          </div>
          <div className={style.input_box_outer_body}>
            <textarea
              placeholder="Type your message here..."
              value={textMsg}
              onChange={(e) => {
                changeTextMsg(e.target.value);
                if (e.target.value !== "") {
                  changeMsgTyped(true);
                } else {
                  changeMsgTyped(false);
                }
              }}
            />
          </div>
          <div className={style.misc}>
            <MdEmojiEmotions
              style={{ height: "20px", width: "20px", color: "grey" }}
              onClick={() => {
                upcomming();
              }}
            />
            <CiCamera
              style={{ height: "20px", width: "20px" }}
              onClick={() => {
                upcomming();
              }}
            />
          </div>
          <div className={style.microphone}>
            {!msgTyped ? (
              <FaMicrophone
                onClick={() => {
                  upcomming();
                }}
              />
            ) : (
              <IoSend
                onClick={() => {
                  handelTextMsgSent();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
