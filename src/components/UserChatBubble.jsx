import React from "react";
import style from "../css/UserChatBubble.module.css";
function UserChatBubble() {
  return (
    <div className={style.bubbleOuterBody}>
      <div className={style.innerLeftBody}>
        <span className={style.smallBubble}></span>
      </div>
      <div className={style.innerRightBody}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </div>
    </div>
  );
}

export default UserChatBubble;
