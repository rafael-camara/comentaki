import {
  AuthError,
  User,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
  updateProfile as fbUpdateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { auth } from '@/firebaseConfig'
import { toastMessage } from '@/functions/toastMessage'

interface AuthContextData {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  updateProfile: (data: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  async function signIn(email: string, password: string): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      setCurrentUser(userCredential.user)
    } catch (error) {
      const errorCode = (error as AuthError).code
      const errorMessage = (error as AuthError).message

      if (
        errorCode === 'auth/user-not-found' ||
        errorCode === 'auth/wrong-password'
      ) {
        toastMessage('Usuário não encontrado.')
      }

      console.error(`ERROR: ${errorCode}, Message: ${errorMessage}`)
      throw error
    }
  }

  async function signUp(email: string, password: string): Promise<void> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      setCurrentUser(userCredential.user)
    } catch (error) {
      const errorCode = (error as AuthError).code
      const errorMessage = (error as AuthError).message

      if (errorCode === 'auth/email-already-in-use') {
        toastMessage('Este e-mail já está em uso.')
      }

      console.error(`ERROR: ${errorCode}, Message: ${errorMessage}`)

      throw error
    }
  }

  async function resetPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email)
    } catch (error) {
      const errorCode = (error as AuthError).code
      const errorMessage = (error as AuthError).message

      if (errorCode === 'auth/user-not-found') {
        toastMessage('Usuário não encontrado.')
      }

      console.error(`ERROR: ${errorCode}, Message: ${errorMessage}`)

      throw error
    }
  }

  async function updateProfile(data: Partial<User>): Promise<void> {
    try {
      if (auth.currentUser) {
        await fbUpdateProfile(auth.currentUser, data)

        setCurrentUser(auth.currentUser)
      } else {
        toastMessage('Nenhum usuário está conectado no momento.')
      }
    } catch (error) {
      toastMessage(`${error}`)

      throw error
    }
  }

  async function signOut(): Promise<void> {
    try {
      await fbSignOut(auth)

      setCurrentUser(null)
    } catch (error) {
      toastMessage(`${error}`)

      throw error
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setCurrentUser(user) : setCurrentUser(null)
    })

    return unsubscribe
  }, [])

  const value: AuthContextData = {
    user: currentUser,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
