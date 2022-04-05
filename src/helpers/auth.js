import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}
