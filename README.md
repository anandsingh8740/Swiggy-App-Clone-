# Namaste React 

# Parcel , what is parcel doing it for you
- Parcel created a Dev Build for you.
- It creats a Local Server for you.
- It host your app to the Server.
- Pracel is "automatically refreshing" your page automatically also.
- It is doing somthing know as "HMR" - means Hot Module replacemant.
- Parcel uses File watching Algorithem - is written in C++.
- it give Caching - "Faster Builds" how because of Caching.
- Parcel will also do your "Image optimization".
- If I will create a production build it will mini "Minification" file also.
- Parcel will 'Bundle all the file' also for us It will do Bundling.
- Parcel is "Compress" file
- Parcel is giving energy to are app it's not just React
- Code Splitting
- Diffrential Bundling- Support Older Browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- it creats "Diffrent dev and production bundles"



# Namaste Food

/**
 * Header
 *  - Logo
 *  - Nav-Items
 * Body
 *  - Seach
 *  - RestaurantContainer
 *    - RestaurantCard
 *     - Img
 *     - Name of res, Star rating, cuisine, delery time
 * Footer
 *  - Copyright
 *  - links
 *  - Address
 *  - Contact 
 */

 There are two type of export and import

 - Default Export/Import

 export default Component;
 import Component from "path";


 - Named Export/Import

 export const Component;
 import {Component} from "path";

 # React Hooks
 (Normal JS utility function)
 There are two very Important Hooks.
 one Hooks is Known as
 - useState() -> This is used to generate "Superpowerful State Variable in React".  ... It is import from react....It is import as a name import
 useState variable is create State variable 
 and 2nd is 
 - useEffect()




# 2 type of Routing in web app
- Client Side Routing
- Server Side Routing 

# React Lifecycle Method 
 - Parent Constructor
 - Parent render

   - First Constructor
   - First Render

   - Second Constructor
   - Second Render

   <DOM UPDATED - IN SINGLE BATCH>

   - First ComponentDidMount
   - Second ComponentDidMount

- Parent ComponentDidMount   


# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

# Types of testing (devloper)
- Unit Testing -> You test your react component in isolation.

- Integration Testing -> where multiple component is involved and talking to each other. there are event happend.This is integration testing

- End to End Testing - e2e testing -> Testing a React application as soon as the user land the wesite to the user leave the website. we will test all the flows. we will test differnt type of flows.

# Setting up Testing in our app
- Install React Testing Library
- Install just 
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disbale default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
