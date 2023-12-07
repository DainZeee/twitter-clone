import { closeCommentModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  PhotographIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
  XIcon,
} from "@heroicons/react/outline";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CommentModal() {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const userImage = useSelector((state) => state.user.photoUrl);
  const tweetDetails = useSelector((state) => state.modals.commentTweetDetails);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  const router = useRouter()

  async function sendComment() {
    const docRef = doc(db, "posts", tweetDetails.id);
    const commentDetails = {
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      comment: comment,
    };

    await updateDoc(docRef, {
      comments: arrayUnion(commentDetails),
    })

    dispatch(closeCommentModal())
    router.push("/" +tweetDetails.id)
  }

  return (
    <>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeCommentModal())}
      >
        <div
          className="rounded-lg bg-black relative
         border-gray-500 border w-full h-full 
         text-white
         sm:w-[600px] sm:h-[386px]
         sm:p-10 p-4"
        >
          <div className="absolute w-[2px] h-[82px] bg-gray-500 left-[40px] top-[96px] sm:left-[64px] sm:top-[120px] "></div>
          <div
            onClick={() => dispatch(closeCommentModal())}
            className="absolute top-4 cursor-pointer"
          >
            <XIcon className="w-6" />
          </div>
          <div className="mt-8">
            <div className="flex space-x-3">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={tweetDetails.photoUrl}
              />
              <div>
                <div className="flex space-x-1.5">
                  <h1 className="font-bold">{tweetDetails.name}</h1>
                  <h1 className="text-gray-500">@{tweetDetails.username}</h1>
                </div>
                <p className="mt-2">{tweetDetails.tweet}</p>
                <h1 className="text-gray-500 text-[15px] mt-2">
                  replying to{" "}
                  <span className="text-[#1b9bf0]">
                    @{tweetDetails.username}
                  </span>
                </h1>
              </div>
            </div>
          </div>
          <div className="mt-11">
            <div className="flex space-x-3">
              <img
                className="w-12 h-12 object-cover rounded-full"
                src={userImage}
              />
              <div className=" w-full">
                <textarea
                  placeholder="Tweet your reply"
                  className="w-full bg-transparent resize-none text-lg
                  outline-none "
                  onChange={(e) => setComment(e.target.value)}
                />
                <div className="pt-4 flex justify-between border-t border-gray-700">
                  <div className="flex space-x-0">
                    <div className="iconAnimation">
                      <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconAnimation">
                      <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconAnimation">
                      <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconAnimation">
                      <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                    <div className="iconAnimation">
                      <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
                    </div>
                  </div>
                  <button
                    className="bg-[#1d9bf0] rounded-full px-4 py-1.5 disabled:opacity-50"
                    disabled={!comment}
                    onClick={sendComment}
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
