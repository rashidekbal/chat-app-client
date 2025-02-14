import React, { useState } from "react";
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
function ChatBox() {
  const [msgTyped, changeMsgTyped] = useState(false);
  const [textMsg, changeTextMsg] = useState();

  const handelTextMsg = () => {
    console.log("message sent");
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
              <img
                height="80px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_tMDmGpdUANiBhrYP30GLPrVvcNZed4sTeA&s"
                alt="avatar"
              />
            </span>
            <span className={style.Username}>Anil chabra</span>
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
          <ChatBubble></ChatBubble>
          <UserChatBubble></UserChatBubble>
          <ChatBubble></ChatBubble>
          <UserChatBubble></UserChatBubble>
          <ChatBubble></ChatBubble>
          <UserChatBubble></UserChatBubble>
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
                if (e.target.value !== "") {
                  changeTextMsg(e.target.value);
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
                  handelTextMsg();
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
