import RestaurantCard, { withisOpenLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// Beacuse of body and RestaurantCard is same Level.that why we will import above like this.
// not using keys (not acceptable) <<<<<<<< index as key <<<< best thing we can use (Unique key{best practice})

const Body = () => {
//Local State Variable - Super powerful variable
// setListOfRestraunt is a function
const [listOfRestaurants, setListOfRestraunt] = useState([]);  // Array destructring
const [filteredRestaurant, setFilteredRestaurant] = useState([]);

const [searchText, setSearchText] = useState("");

const RestaurantCardisOpen = withisOpenLabel(RestaurantCard);

// above one line and below three line is same
// const arr = useState(resList)
// const[listOfRestaurants, setListOfRestraunt] = arr;
// const listOfRestaurants = arr[0];
// const setListOfRestraunt = arr[1];

// Whenever state variables update, react triggers a reconciliation cycle(re-render the component)

// console.log("Body Rendered", listOfRestaurants);

useEffect(() => {   // pass an argument
   fetchData();
  // console.log("useEffect Called");
}, []);            

const fetchData = async() => {
  const data = await fetch(
   //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9319223&lng=77.696844&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);

    const json = await data.json();
 
    //Optional Chanining
    // ye live data ka hai, ye in future me update ho sakta hai?
     setListOfRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  // cards[4]?
     
     setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

const OnlineStatus = useOnlineStatus();
if(OnlineStatus === false) 
   return( 
  <h1>
    Looks Like you're offline!! Please check your internet connection;
  </h1>
   );
   
const{loggedInUser, setUserName} = useContext(UserContext);

return (  
    listOfRestaurants.length === 0 ? (
    <Shimmer/>
    ) : (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input
             type="text"
             data-testid ="searchInput"
            className="border border-solid border-black" 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }} 
            />
            <button 
              className="px-4 py-2 bg-green-100 m-4 rounded-lg"
              onClick ={() =>{
              // Filter the restraunt cards and update the UI
              // seachText
              console.log(searchText);

             const filteredRestaurant = listOfRestaurants.filter(   
              //(res) => res.info.name.toLowerCase().includes === (searchText.toLowerCase())
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            ); 

             setFilteredRestaurant(filteredRestaurant);
              
            }}
            >
              Search
            </button>
          </div>
        <div className="search m-4 p-4 flex items-center">
          <button 
          className="px-4 py-2 bg-gray-100 rounded-lg" 
           onClick ={() => {
           // setListOfRestraunt(); //
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res)=> res.info.avgRating> 4
              );
              setListOfRestraunt(filteredList) // pahle ka hai
             // setFilteredRestaurant(filteredList);
            }} 
            >
            Top Rated Restaurants
          </button>
          </div>
        <div className="search m-4 p-4 flex items-center">
          <label>userName :</label>
        <input 
        className="border border-black p-2" 
          value={loggedInUser}
        onChange = {(e) => setUserName(e.target.value)}/>
          </div>
        </div> 
        <div className = "flex flex-wrap">
          {filteredRestaurant.map((restaurant) => (
          <Link 
          key={restaurant.info.id}  
          to ={"/restaurants/"+ restaurant.info.id}
          >
           
             {restaurant.info.isOpen ? (
               <RestaurantCardisOpen resData = {restaurant}/>
             ) : (
              <RestaurantCard resData = {restaurant} />
            )}
             
            </Link>
          ))}
        </div>  
      </div>
    )
    )
  };

  export default Body;