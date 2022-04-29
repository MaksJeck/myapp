import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth,
    signOut
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBuRnfKfziM25txc3czbPBB50DvmR7hsQ8",
    authDomain: "mj-chat-d74b4.firebaseapp.com",
    projectId: "mj-chat-d74b4",
    storageBucket: "mj-chat-d74b4.appspot.com",
    messagingSenderId: "833979985836",
    appId: "1:833979985836:web:bd9b34283a4c1f243b1409"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};
export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};
export const logOut = async () => {
    await signOut(auth);
};

export const userRef = ref(db, "user");
export const userNameRef = ref(db, "user/name");
export const userShowNameRef = ref(db, "user/showName");
export const chatsRef = ref(db, "chats");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const msgsRef = ref(db, "messages");
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);


