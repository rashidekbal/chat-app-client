import React from "react";
import style from "../css/HomePage.module.css";
import { TiHome } from "react-icons/ti";
import { AiFillMessage } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { LiaUsersCogSolid } from "react-icons/lia";
import ChatBox from "./ChatBox";
import OnlinePeopleAndGroups from "./OnlinePeopleAndGroups";
function HomePage() {
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
        <OnlinePeopleAndGroups></OnlinePeopleAndGroups>
      </div>
      <div className={style.chatSection}>
        <ChatBox></ChatBox>
      </div>
    </div>
  );
}

export default HomePage;
