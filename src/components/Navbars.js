import React, { useState,useEffect } from "react";
import search from "./image/search.svg";
import closeBtn from './image/close-btn.svg'
import "./Navbar.css";
function Navbars(props) {
  const [showForm, setShowForm] = useState(false);
  const [showFormLater, setShowFormLater] = useState(false);

  useEffect(() => {
    const timer = setTimeout(()=> {
      setShowFormLater(showForm)
    },300)
    
    return () => {
      clearTimeout(timer)
    }
  }, [showForm])
  
  const searchHandler = (e) => {
    e.preventDefault();
  };
  const activateFormHandler = () => {
    setShowForm(true)
  }
  const removeFormHandler = () => {
    setShowForm(false)
    
  }
  
  return (
    <span className={"navbar"}>
      {props.auth.currentUser && <button className={"btn_signout"} onClick={() => props.auth.signOut()}>Sign Out</button>}
      {!showFormLater && (
        <button className={"btn_search_activate"} onClick={activateFormHandler}>
          <img src={search} />
        </button>
      )}
      {showFormLater && (
        <form
          className={"form_search"}
          onSubmit={searchHandler}
        >
          <input type="text" className={`input_search ${showForm ? 'active' : ''}`} />
          <button className={"btn_search"}>
            <img src={search} alt="search"/>
          </button>
          <button className={`close__btn ${showForm ? 'active' : ''}`}>
            <img src={closeBtn} alt="close-btn" onClick={removeFormHandler}/>
          </button>
        </form>
      )}
    </span>
  );
}

export default Navbars;
