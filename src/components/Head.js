import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }


  return (
    <div className="flex justify-between p-5  shadow ">
      <div className="flex gap-4 col-span-2">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="hamburger"
          className="h-8 cursor-pointer"
          onClick = {toggleMenuHandler}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt="logo"
          className="h-8 "
        />
      </div>
      <div className=" w-1/2 flex justify-start ">
        <input
          type="text"
          className="w-2/3 border border-gray-400 py-2 rounded-l-full px-4"
          placeholder="search"
        />
        <button className="border border-gray-400 px-6 rounded-r-full bg-gray-100">
          <i className="fas fa-search text-gray-500 "></i>
        </button>
      </div>
      <div className="">
        <img
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="user_icon"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
