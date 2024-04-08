import React, { useState, useEffect, useContext } from 'react'
import {
  getAuth,
  signOut as fbSignOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail as fbSendPasswordResetEmail,
} from 'firebase/auth'

import firebase from './firebase'

const auth = getAuth(firebase)

export const AuthContext = React.createContext()

const useGetUser = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null)
    })
    // firebase.auth().onAuthStateChanged(currentUser => {
    //   if (currentUser) {
    //     setUser(currentUser)
    //   } else {
    //     setUser(null)
    //   }
    // })
  }, [])
  return user
}

const useCreateUser = () => {
  const [state, setState] = useState({
    error: '',
    success: '',
  })
  const createUser = (email, passwd) => {
    createUserWithEmailAndPassword(auth, email, passwd)
      .then((user) => {
        if (user) {
          setState({ ...state, success: 'Ok' })
        }
      })
      .catch((err) => {
        setState({ ...state, error: err.message })
      })
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, passwd)
    //   .then((user) => {
    //     if (user) {
    //       setState({
    //         ...state,
    //         success: 'Ok',
    //       })
    //     }
    //   })
    //   .catch((err) => {
    //     setState({
    //       ...state,
    //       error: err.message,
    //     })
    //   })
  }
  return [state, createUser]
}
const useSignInUser = () => {
  const [state, setState] = useState({
    error: '',
    success: '',
  })
  const signInUser = (email, passwd) => {
    try {
      signInWithEmailAndPassword(auth, email, passwd)
        .then((user) => {
          if (user) {
            setState({ ...state, success: 'Ok' })
          }
        })
        .catch((err) => {
          setState({ ...state, error: err.message })
        })
    } catch {}
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, passwd)
    //   .then((user) => {
    //     if (user) {
    //       setState({
    //         ...state,
    //         success: 'Ok',
    //       })
    //     }
    //   })
    //   .catch((err) => {
    //     setState({
    //       ...state,
    //       error: err.message,
    //     })
    //   })
  }
  return [state, signInUser]
}

const useSendPasswordResetEmail = () => {
  const [message, setMessage] = useState({
    type: '',
    text: '',
  })

  const sendPasswordResetEmail = (email) => {
    try {
      fbSendPasswordResetEmail(auth, email)
        .then(() => {
          setMessage({
            type: 'success',
            text: 'O e-mail de redefinição foi enviado!',
          })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setMessage({
            type: 'error',
            text: `ERROR: ${errorCode}, Message: ${errorMessage}`,
          })
        })
    } catch {}
  }
  return [message, sendPasswordResetEmail]
}

const signOut = () => {
  fbSignOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    })
  // firebase.auth().signOut()
  // .then(() => {
  //   console.log('signout')
  // })
}

export const AuthProvider = ({ children }) => {
  const user = useGetUser()
  const [createUserState, createUser] = useCreateUser()
  const [signInUserState, signInUser] = useSignInUser()
  const [messageReset, sendPasswordResetEmail] = useSendPasswordResetEmail()

  return (
    <AuthContext.Provider
      value={{
        user,
        createUser: {
          createUserState,
          createUser,
        },
        signInUser: {
          signInUserState,
          signInUser,
        },
        signOut,
        messageReset,
        sendPasswordResetEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const auth = useContext(AuthContext)

  return { ...auth }
}
