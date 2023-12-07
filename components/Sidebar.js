import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  BellIcon,
  DotsHorizontalIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { signOutUser } from "@/redux/userSlice";
import { auth } from "@/firebase";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";

export default function Sidebar() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignupModal());
    dispatch(closeLoginModal());
  }

  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24 sm:ml-2 ">
      <nav className="h-full relative xl:space-y-1.5">
        <div className="flex justify-center items-center py-3 xl:justify-start xl:p-3">
          <Image
            src={"/assets/x_logo_2023_(white).png"}
            width={34}
            height={34}
          />
        </div>
        <SidebarLink Icon={HomeIcon} text={"Home"} />
        <SidebarLink Icon={HashtagIcon} text={"Explore"} />
        <SidebarLink Icon={BellIcon} text={"Notifications"} />
        <SidebarLink Icon={InboxIcon} text={"Messages"} />
        <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
        <SidebarLink Icon={UserIcon} text={"Profile"} />
        <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
        <button className="hidden xl:inline bg-[#1d9bf0] rounded-full mt-2 h-[53px] w-[200px] text-lg font-bold">
          Post
        </button>

        <div
          onClick={handleSignOut}
          className="hover:bg-white hover:bg-opacity-10 cursor-pointer bottom-0
         rounded-full xl:p-3 absolute flex justify-center items-center  space-x-3"
        >
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={user.photoUrl || "/assets/kylie.png"}
          />
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <DotsHorizontalIcon className="h-5 xl:inline" />
        </div>
      </nav>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation xl:justify-start justify-center flex mb-3 items-center text-xl space-x-3 ">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text} </span>
    </li>
  );
}
