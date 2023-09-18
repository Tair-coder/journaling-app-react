import React, { useRef, useState} from 'react'
import Card from './UI/Card';
import style from './Form.module.css';

function Form(props) {
    const [numOfPost,setNumOfPost] = useState(props.amongPost+1)
    const titleValue = useRef('');
    const noteValue = useRef(''); 
    // const db = props.db.collection('users').doc(props.auth.currentUser.uid)
    function onSubmitHandler(e) {
    e.preventDefault();
    if (titleValue.current.value.length === 0 || noteValue.current.value.length === 0) {
      return;
    } else {
      props.addNote({
        num: numOfPost,
        id: `${props.auth.currentUser.uid}${Math.random().toString(16).slice(10)}`,
        title: titleValue.current.value,
        content: noteValue.current.value,
        date: new Date().toJSON().slice(0, 10).replace(/-/g, '/')
      });
      setNumOfPost(prevValue => prevValue + 1);
      //  Создаю новую запись
      // db.collection('my notes').doc(`${props.auth.currentUser.uid}${Math.random().toString(16).slice(10)}`).set({
      //     title: titleValue.current.value,
      //     content: noteValue.current.value,
      //     date:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      //     }).then(function () {
      //           props.updateList()
      //         })
      //         .catch(function (error) {
      //         console.error("Error writing Value: ", error);
      //         });
    }
  } 
  return (
    <Card class={style.form}>
        <form onSubmit={onSubmitHandler} className={style.form_form}>
            <input  ref={titleValue} placeholder='Заголовок' className={style.input_title}/>
            <textarea ref={noteValue} rows="5" placeholder='Заметка...' className={style.input_note}></textarea>
            <button className={style.submit}>Добавить запись</button>
        </form>
    </Card>
  )
}

export default React.memo(Form)