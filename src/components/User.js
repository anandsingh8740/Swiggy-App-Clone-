import {useState } from "react";
import React, { useState, useEffect } from "react"; 

const User = ({name}) => {
    const[count, setCount] = useState(0);
    const [count2] = useState(1);
    
    useEffect (() => {  
        // Api Calls
       }, []);

  return(
    <div className="user-card m-4 p-4 bg-gray-50 rounded-r-lg">
        <h1>Count = {count} </h1>
        <h1>Count2 = {count2}</h1>
        <h3>Name:  {name}</h3>
        <h3>Location: Khalilabad</h3>
        <h4>Contact: anandsinghh07</h4>
    </div>
 );
};

export default User;