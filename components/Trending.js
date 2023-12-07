import { SearchIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function Trending() {
  return (
    <div className="hidden lg:flex flex-col ml-7 mr-7 mt-4">
      <div className="flex space-x-3 bg-white bg-opacity-10 w-[300px] h-[44px] p-3 rounded-3xl">
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent focus:outline-none placeholder:text-gray-600"
          placeholder="Search Twitter"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3 ">
        <h1 className="font-bold text-cl p-3">What's happening</h1>
        <div className="p-3 relative hover:bg-white hover:bg-opacity-10 cursor-pointer">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in Uk</p>
          <h1 className="text-[15px] font-bold">Rishi Sunak</h1>
          <p className="text-xs text-gray-500">340K Tweets</p>
        </div>
        <div className="p-3 relative hover:bg-white hover:bg-opacity-10 cursor-pointer">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in Us</p>
          <h1 className="text-[15px] font-bold">Trump</h1>
          <p className="text-xs text-gray-500">520K Tweets</p>
        </div>
        <div className="p-3 relative hover:bg-white hover:bg-opacity-10 cursor-pointer">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in Business and Finance</p>
          <h1 className="text-[15px] font-bold">Bitcoin</h1>
          <p className="text-xs text-gray-500">120k Tweets</p>
        </div>
        <div className="p-3 relative hover:bg-white hover:bg-opacity-10 cursor-pointer">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in Tech</p>
          <h1 className="text-[15px] font-bold">ChatGPT</h1>
          <p className="text-xs text-gray-500">67k Tweets</p>
        </div>
        <div className="p-3 relative hover:bg-white hover:bg-opacity-10 cursor-pointer">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in Sports</p>
          <h1 className="text-[15px] font-bold">Jokic</h1>
          <p className="text-xs text-gray-500">14.1K Tweets</p>
        </div>
      </div>
      <div className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3 ">
        <h1 className="font-bold text-xl p-3">Who To Follow</h1>
        <div className="flex justify-between p-3 hover:bg-white hover:bg-opacity-10 cursor-pointer ">
          <div className="flex space-x-3 ">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/bragg.png"
            ></img>
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">David Bragg</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@davidbragg</h1>
            </div>
          </div>

          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold ">Follow</button>
        </div>
        <div className="flex justify-between p-3 hover:bg-white hover:bg-opacity-10 cursor-pointer">
          <div className="flex space-x-3 ">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/kylie.png"
            ></img>
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Kylie Jenner</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@kylie</h1>
            </div>
          </div>

          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold ">Follow</button>
        </div><div className="flex justify-between p-3 hover:bg-white hover:bg-opacity-10 cursor-pointer">
          <div className="flex space-x-3 ">
            <img
              className="w-11 h-11 object-cover rounded-full"
              src="/assets/pfp.png"
            ></img>
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold">Elon Musk</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] mt-1 text-gray-500">@elonmusk</h1>
            </div>
          </div>

          <button className="bg-white text-black text-sm w-20 h-8 rounded-3xl font-bold ">Follow</button>
        </div>
      </div>
    </div>
  );
}
