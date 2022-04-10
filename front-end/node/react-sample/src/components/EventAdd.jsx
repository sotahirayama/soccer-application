import React from "react";

function Header() {
  return (
    <div>
        <div class="flex flex-row">
            <div class="basis-full">
                <div class="mt-1">
                    <form class="w-10/12 mx-auto md:max-w-md">
                        <div class="mb-2">
                            <label for="name" class="text-sm block">タイトル</label>
                            <input type="text" id="name" class="w-full py-2 focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="大会・ソサイチ名">
                            </input> 
                        </div>
                        <div class="mb-2">
                            <label for="place" class="text-sm block">開催地</label>
                            <input type="text" id="place" class="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="国立日産競技場">
                            </input> 
                        </div>
                        <div class="mb-2">
                            <label for="location" class="text-sm block">住所</label>
                            <input type="text" id="location" class="w-full py-2 border-b focus:outline-none focus:border-b-2 focus:border-indigo-500 placeholder-gray-500 placeholder-opacity-50" placeholder="東京都新宿区">
                            </input> 
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        <button class="my-2 px-4 py-2 border-2 border-blue-500 rounded-md bg-gradient-to-b from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white shadow-lg">
            追加
        </button>
    </div>
  );
}

export default Header;