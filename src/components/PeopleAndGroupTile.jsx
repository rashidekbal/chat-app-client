import React from "react";
import style from "../css/PeopleAndGroupTile.module.css";
function PeopleAndGroupTile() {
  return (
    <>
      {" "}
      <div className={style.tileBody}>
        <div className={style.imageHolder}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLWKNduCw_8jK8-lg0p1K1t6X3ATRkhOkDg&s"
            height="50px"
            width="40px"
            className={style.img}
          />
        </div>
        <div className={style.infoHolder}>
          <p className={style.Names}>Group Name</p>
          <p className={style.msg}>something</p>
        </div>
      </div>{" "}
      <div className={style.tileBody}>
        <div className={style.imageHolder}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLWKNduCw_8jK8-lg0p1K1t6X3ATRkhOkDg&s"
            height="50px"
            width="40px"
            className={style.img}
          />
        </div>
        <div className={style.infoHolder}>
          <p className={style.Names}>Group Name</p>
          <p className={style.msg}>something</p>
        </div>
      </div>{" "}
      <div className={style.tileBody}>
        <div className={style.imageHolder}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLWKNduCw_8jK8-lg0p1K1t6X3ATRkhOkDg&s"
            height="40px"
            width="40px"
            className={style.img}
          />
        </div>
        <div className={style.infoHolder}>
          <p className={style.Names}>Group Name</p>
          <p className={style.msg}>something</p>
        </div>
      </div>
    </>
  );
}

export default PeopleAndGroupTile;
