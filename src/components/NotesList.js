import React, { useState, useEffect } from "react";
import Card from "./UI/Card";
import style from "./NotesList.module.css";
import Note from "./Note";
function NotesList(props) {
  const [counterOfPosts,setCounterOfPosts] = useState(0);
  // const [data,setData] = useState(props.data)
  const db = props.db.collection('users').doc(props.auth.currentUser.uid);
  useEffect(()=> {
    getData()
    // sortDate()
  },[])  
  useEffect(()=> {
    setCounterOfPosts(props.data.length)
    if(counterOfPosts !== 0 && counterOfPosts % 3 === 0) {
      console.log('send DATA')
      postData()
    }
    
  },[props.data])



  const postData = () => {
    props.data.map(data => {
      return db.collection('my notes').doc(data.id).set({
        id:data.id,
        title:data.title,
        content:data.content,
        date:data.date,
        num:data.num
      });

    })
  }
  const getData = async() => {
    const d = db.collection('my notes')
    const snapshot = await d.get();
    console.log(snapshot)
    snapshot.forEach(doc => {
      props.addNote(doc.data())
      props.setAmongPost(counterOfPosts)
      
    });
    
  }
  function compareNumeric(a, b) {
    a = a.num
    b = b.num
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }
  return (
    <Card class={style.content__note}>
      {props.data.sort(compareNumeric).reverse().map((note) => {        
        return (
          <Note
            key={note.id}
            title={note.title}
            description={note.content}
            date={note.date}
          />
        );
      })}
    </Card>
  );
}

export default NotesList;
