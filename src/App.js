// import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";s
// import "firebase/firestore";
// import "firebase/auth";
// import "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import Main from "./components/Main";
import SignIn from "./components/SignIn";


firebase.initializeApp({
    apiKey: "AIzaSyCkaptiUEh57AzH_AkyQIW9CHbmveSHDPI",
    authDomain: "journaling-app-2-0.firebaseapp.com",
    projectId: "journaling-app-2-0",
    storageBucket: "journaling-app-2-0.appspot.com",
    messagingSenderId: "1081959043445",
    appId: "1:1081959043445:web:1a903cc1d95414ba00c33c",
    measurementId: "G-SCDH3SBT4Q"
  });
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  // const analytics = firebase.analytics();
function App() {
  const [user] = useAuthState(auth)
  return <div className="App">

    {user ? <Main auth={auth} db={firestore}/> : <SignIn firebase={firebase} auth={auth}/>}
  </div>;
}

export default App;
