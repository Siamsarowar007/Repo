import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './App.css'
import { auth } from './Firebase/Firebase.init';
import { useState } from 'react';



const googleProvider = new GoogleAuthProvider();



function App() {

  const [user, setUser] = useState(null)

  const handleGoogleSingIN = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user)
        setUser(result.user)
      })
      .catch(error => {
        console.log(error)

      }
      )
  }


  return (
    <>

      <h1>Simple firebase auth</h1>

      <button onClick={handleGoogleSingIN}>Google Sing In</button>
      {
        user && <div>
          <h3>user Name : {user.displayName}</h3>
        </div>
      }
    </>
  )
}

export default App
