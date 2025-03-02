import React from "react";
import style from "../css/PeopleAndGroupTile.module.css";
function PeopleAndGroupTile({ item, openChatPanelhandler }) {
  return (
    <>
      <div
        className={style.tileBody}
        onClick={() => {
          openChatPanelhandler(item);
        }}
        style={{
          borderBottom: "1px solid grey",
          borderRadius: "0 0 25px 25px",
        }}
      >
        <div className={style.imageHolder}>
          <img
            src={item.imgSrc}
            height="50px"
            width="40px"
            className={style.img}
          />
        </div>
        <div className={style.infoHolder}>
          <p className={style.Names}>{item.Name}</p>
          <p className={style.msg}>{item.placeHolder}</p>
        </div>
      </div>
      {""}
    </>
  );
}

export default PeopleAndGroupTile;
