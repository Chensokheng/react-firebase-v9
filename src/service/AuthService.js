import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import { auth } from "../config/firebase.config";

class AuthService {
	async authWithGoogle() {
		const provider = new GoogleAuthProvider();
		return await signInWithPopup(auth, provider);
	}

	async logOut() {
		return await signOut(auth);
	}

	waitForUser(callback) {
		return onAuthStateChanged(auth, (userCred) => callback(userCred));
	}
}

export default new AuthService();
