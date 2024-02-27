import { useContext } from "react";
import {CDN_URL} from "../utils/constants";   // this is a named import
import UserContext from "../utils/UserContext";
// import CDN_URL from "../utils/constants";   // this is a default import

// These are same
// const RestaurantCard = (props) => {  // same as below line 
// const RestaurantCard = ({resName, cuisine}) => {  
    const RestaurantCard = (props) => {  
        //const {resName, cuisine} = props;
        const { resData } = props;
        const {loggedInUser} = useContext(UserContext);

    const {
          cloudinaryImageId,
          name,
          avgRating,
          cuisines,
          costForTwo,
          sla,
        } = resData?.info;
      
      return (
          <div data-testid="resCard"
           className="m-3 p-4 w-[225.6px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img 
            className = "rounded-lg" 
            alt ="res-logo" 
            src = {CDN_URL + cloudinaryImageId}
            />

            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4> 
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
            {/* <h4>User : {loggedInUser}</h4> */}
          </div>
        );
      };

      // Higer Order Component

      // input - RestaurentCard => RestaurantCardisOpen

    export const withisOpenLabel = (RestaurantCard) => {
        return (props) => {
          return(
            <div>
              <label className="absolute  bg-red-500 text-white m-2 p-2 rounded-lg">
              isOpen
                </label>
               <RestaurantCard {...props}/>
            </div>
          );
       };
     };

      export default RestaurantCard;