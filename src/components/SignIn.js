import React from 'react'
import Card from './UI/Card'
import styles from './SignIn.module.css';

function SignIn(props) {
  const singInWithGoogle = () => {
    const provider = new props.firebase.auth.GoogleAuthProvider()
    props.auth.signInWithPopup(provider)
  }
  return (
    <Card class={styles.size}>
      <button className={styles.btn} onClick={singInWithGoogle}>Войти через Google</button>
    </Card>
  )
}

export default SignIn