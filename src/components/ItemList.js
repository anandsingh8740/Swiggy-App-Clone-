import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items, dummy}) => {
const dispatch = useDispatch();

const handleAddItem = (item) => {
  // Dispatch an action
  dispatch(addItem(item));
  };
     return( 
       <div>
          {items.map((item) => (
            <div 
            data-testid ="foodItems"
              key ={item.card.info.id} 
              className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
              >
                <div className="w-9/12">    
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> 
                      - ₹
                      {item.card.info.price 
                      ? item.card.info.price/100 
                      : item.card.info.defaultPrice/100}
                    </span>
               </div>
               <p className="text-xs">{item.card.info.description}</p>
               </div>
               <div className="w-3/12 p-4 relative" > 
                  <img src={CDN_URL + item.card.info.imageId} className="w-full"/> 
               <div className="absolute bottom-0 left-0 right-0 text-center">  
                  <button 
                   className="py-2 px-5 rounded-lg bg-white text-green-600 shadow-lg"
                   onClick={() =>handleAddItem(item)}
                   >
                    ADD+ 
                  </button>
                </div>
             </div>
            </div>
          ))}
       </div>
     );
};

export default ItemList;