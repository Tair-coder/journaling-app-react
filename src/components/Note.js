import React from "react";
import style from "./Note.module.css";
function Note(props) {
  return (
    <li className={style.note}>
      <span className={style.note__textcontainer}>
        <h2 className={style.note__title}>{props.title}</h2>
        <h3 className={style.note__date}>{props.date}</h3>
      </span>
      <p className={style.note__desc}>{props.description}</p>
    </li>
  );
}

export default Note;
