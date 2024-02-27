// It is a class based component
import React from "react";

 class UserClass extends React.Component{
// create Constructor
    constructor(props){
        super(props); 
       // Create State
        this.state = {
          userInfo: {
            name: "Dummy Name",
            location: "Dummy Location",
          },
        };
     // console.log( "Child constructor" + this.props.name )
    }

    componentDidMount(){
      this.timer = setInterval(() => {
      //  console.log("NAMASTE REACT OP ");
      }, 1000);
      
      // console.log("Child - componentDidMount" );
    }
   
    componentDidUpdate(prevProps, prevState) {
      if(this.state.count != prevState.count){
       // code
        
      }
      if(this.state.count != prevState.count2) {
       // code
        
      }
      console.log("Component Did Update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
      //  console.log("ComponentWillUnmount");
    }

    render(){ 

     console.log(this.props.name + "Child Render")

       const {name, location, avatar_url} = this.state.userInfo;
        return (
          <div className="user-card">
            <img src= {avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: anandsinghh07</h4>
           </div>
        );
    };
 };

//export default ProfileClass;
export default UserClass;
/****
 * 
 * ---- MOUNTING  LIFE CYCLE ----
 * Constructor(construct)
 * Render (dummy)
 *   <HTML Dummy >
 * Component Did Mount call
 *      <API Call>
 *      <this.setState>  -> State variable is updated 
 * 
 * 
 * --- UPDATE CYCLE
 * 
 *    render(API data)
 *    <HTML (new API data)>
 *    componentDid Update
 */