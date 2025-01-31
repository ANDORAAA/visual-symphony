import { auth } from './fb';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';

export const signup = async (email, psw) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, psw);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
};

export const login = async (email, psw) => {
  try {
    return await signInWithEmailAndPassword(auth, email, psw);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
};

export const logout = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    throw new Error(errorMessage);
  }
};

export const resetPassword = async (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('Email sent to ' + email + 'with reset link');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
