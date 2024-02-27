import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


// test and it is same things

   // beforeAll(() => {
   //    console.log("Before All");
   // });

   // beforeEach(() => {
   //    console.log("Before Each");
   // });
   // afterAll(() => {
   //    console.log("After All");
   // });

   // afterEach(() => {
   //    console.log("After Each");
   // });

describe("Contact Us Page Test Case", () =>{
    it("Should load contact us component", () => {
        render(<Contact />);
     
        const heading = screen.getByRole("heading");
     
        // Assertion
        expect(heading).toBeInTheDocument();
     });
     
     it("Should load button Contact Component", () => {
        render(<Contact />)
     
        const button = screen.getByRole("button");
     
        // Assertion
        expect(button).toBeInTheDocument();
     });
     
     it("Should load input name inside Contact Component", () => {
        render(<Contact />)
     
        const inputName = screen.getByPlaceholderText("name");
     
        // Assertion
        expect(inputName).toBeInTheDocument();
     });
     
     it("Should load 2 input boxes on the Contact Component", () => {
         render(<Contact />);
     
         // Querying
         const inputBoxes = screen.getAllByRole("textbox"); // return your JSX element
     
        // Assertion
         expect(inputBoxes.length).toBe(2);
     });

});





