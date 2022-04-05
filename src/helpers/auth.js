import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    GithubAuthProvider
} from "firebase/auth";
import { auth } from "../services/firebase";

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
        .then(result => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            console.log(credential)
        })
}

export function signInWithGitHub() {
    const provider = new GithubAuthProvider;
    return signInWithPopup(auth, provider)
}

