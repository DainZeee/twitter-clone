import { useEffect, useState } from "react";
import Tweet from "./Tweet";
import TweetInput from "./TweetInput";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { auth, db } from "@/firebase";
import { useDispatch, useSelector } from "react-redux";
import { CogIcon } from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import { signOutUser } from "@/redux/userSlice";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";

export default function PostFeed() {
  const [tweets, setTweets] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignupModal());
    dispatch(closeLoginModal());
  }

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTweets(snapshot.docs);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="sm:ml-16 xl:ml-[350px] m-w-2xl flex-grow border-gray-700 border-x">
      <div className="px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50 flex justify-between sm:space-x-2">
        <div className="">
          <img
            onClick={handleSignOut}
            className="w-9 h-9 rounded-full object-cover xl:hidden md:hidden sm:hidden cursor-pointer"
            src={user.photoUrl || "/assets/kylie.png"}
          />
        </div>
        <div className="xl:hidden md:hidden sm:hidden">
          <img src={"/assets/x-logo.png"} className="w-8 h-8" alt="logo" />
        </div>
        <div className="flex items-center justify-center xl:hidden md:hidden sm:hidden cursor-pointer">
          <CogIcon className="h-9 w-9 text-gray-500" />
        </div>
      </div>
      <TweetInput />

      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} id={tweet.id} data={tweet.data()} />;
      })}
    </div>
  );
}
