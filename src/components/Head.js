import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "./constant";
import { cacheResults } from "../utils/searchSlice";
import { SelectSuggetion } from "../utils/suggestionSlice";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionData, setSuggestionData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  // const [selectSuggetion, setSelectSuggetion] = useState("")
  const searchCache = useSelector((store) => store.search)

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestionData(searchCache[searchQuery]);
      } else {
        getSearchResult();
      }
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);


  const getSearchResult = async () => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const data = await response.json();
      setSuggestionData(data[1]);
      dispatch(cacheResults({
        [searchQuery]: data[1]
      }))
    } catch (error) {
      console.error("Error fetching data:", error);
      setSuggestionData([]);
    }
  };


  const handleSelectSuggestions = (suggestion) => {
    console.log("click", suggestion)
    dispatch(SelectSuggetion(suggestion));
    setShowSuggestions(false)
  }

  const handleBlur = () => {
    if (!document.activeElement.closest(".suggestion-list")) {
      setShowSuggestions(false);
    }

  }

  const handleClick = () =>{
    if (searchQuery) {
      navigate(`/results?search_query=${searchQuery}`);
    }
  }

  return (
    <div className="sticky top-0 z-10 bg-white ">
      <div className="flex justify-between p-5" >
        <div className="flex gap-4 col-span-2">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            alt="hamburger"
            className="h-8 cursor-pointer"
            onClick={toggleMenuHandler}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
            alt="logo"
            className="h-8 "
          />
        </div>
        <div className="w-1/2">
          <div className="  flex justify-start ">
            <input
              type="text"
              className="w-2/3 border border-gray-400 py-2 rounded-l-full px-4"
              placeholder="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              // onBlur={() => setShowSuggestions(false)}
              onBlur={handleBlur}
            />
            <button className="border border-gray-400 px-6 rounded-r-full bg-gray-100" onClick={handleClick}>
              <i className="fas fa-search text-gray-500 "></i>
            </button>
          </div>
          {showSuggestions && (
            <div className="absolute  bg-white w-[31rem] px-4 py-2 rounded-lg shadow-2xl mt-2 suggestion-list"
            >
              <ul >
                {suggestionData
                  ? suggestionData?.map((suggestion, index) => {
                    return (
                      <Link to={`/results?search_query=${suggestion}`} key={`${index}-suggestion`}>
                        <li
                          className="font-semibold py-2 hover:bg-gray-100 px-3 cursor-pointer"

                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => handleSelectSuggestions(suggestion)}
                          onBlur={handleBlur}
                        >
                          <i className="fas fa-search text-gray-400 mr-3" ></i>
                          {suggestion}
                        </li>
                      </Link>
                    );
                  })
                  : ""}
              </ul>
            </div>
          )}
        </div>
        <div className="">
          <img
            src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
            alt="user_icon"
            className="h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
