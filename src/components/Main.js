import React, { useEffect, useState } from 'react';
import Form from './Form';
import style from './Main.module.css'
import NotesList from './NotesList';
import Navbars from './Navbars';

// const DATA_BASE = [{
//   id:'1',
//   title:'В четверг в колледж не идем!',
//   content:'Причиной стала праздничные дни,которых в месяце апреля много!',
//   date:'21.04.2023'
// },
// {
//   id:'2',
//   title:'В четверг в колледж не идем!',
//   content:'Причиной стала праздничные дни,которых в месяце апреля много!',
//   date:'21.04.2023'
// }
// ]
function Main(props) {
  const [notes,setNotes] = useState([]);
  const [amongPost,setAmongPosts] = useState(0)
  const addNoteHandler = (note) => {
    setNotes(prevNotes =>  [note,...prevNotes])

  }
  const setAmongPostHandler = (num) => {
    setAmongPosts(prev => prev+num)
  }

  return (
    <div className={style.main}>
      <Navbars auth={props.auth}/>
      <Form addNote={addNoteHandler} db={props.db} auth={props.auth} amongPost={amongPost}/>
      <NotesList auth={props.auth} data={notes}  db={props.db} addNote={addNoteHandler} setAmongPost={setAmongPostHandler} />
    </div>
  )
}

export default Main