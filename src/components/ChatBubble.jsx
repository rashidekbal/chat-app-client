import React from "react";
import style from "../css/ChatBubble.module.css";
function ChatBubble() {
  return (
    <div className={style.bubbleOuterBody}>
      <div className={style.innerLeftBody}>
        <span className={style.smallBubble}></span>
      </div>
      <div className={style.innerRightBody}>
        Lorem ipsum dolor sit amet consectetur{" "}
      </div>
    </div>
  );
}

export default ChatBubble;
