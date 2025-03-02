import React from "react";
import style from "../css/UserChatBubble.module.css";
function UserChatBubble({ data }) {
  return (
    <div className={style.bubbleOuterBody}>
      <div className={style.innerLeftBody}>
        <span className={style.smallBubble}></span>
      </div>
      <div className={style.innerRightBody}>{data}</div>
    </div>
  );
}

export default UserChatBubble;
