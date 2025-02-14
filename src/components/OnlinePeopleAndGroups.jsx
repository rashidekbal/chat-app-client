import React from "react";
import style from "../css/OnlinePeopleAndGroups.module.css";
import { IoSearchOutline } from "react-icons/io5";
import PeopleAndGroupTile from "./PeopleAndGroupTile";
function OnlinePeopleAndGroups() {
  return (
    <>
      <div className={style.searchBar}>
        <span className={style.searchBtnSpan}>
          {" "}
          <IoSearchOutline className={style.icons} />
        </span>
        <span className={style.SearchBarInputHolder}>
          <input type="text" placeholder="Search" />
        </span>
      </div>

      <div className={`${style.GroupsHolder} ${style.list}`}>
        <h2>Groups</h2>
        <div className={style.applyScroll}>
          <PeopleAndGroupTile />
          <PeopleAndGroupTile />
          <PeopleAndGroupTile />
        </div>
      </div>

      <div className={`${style.OnlinePersons} ${style.list}`}>
        <h2>People online</h2>
        <div className={style.applyScroll}>
          <PeopleAndGroupTile />
          <PeopleAndGroupTile />
          <PeopleAndGroupTile />
        </div>
      </div>
    </>
  );
}

export default OnlinePeopleAndGroups;
