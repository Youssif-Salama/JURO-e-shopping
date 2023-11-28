// SignupContext.js
import axios from "axios";
import { createContext } from "react";
export const SignupContext = createContext();
// making function to post data to //api be
async function addNewUser(values) {
  try {
    const response = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signup`,
      values
    );
    return response.data; // Assuming your API returns data on success
  } catch (error) {
    console.error("Error in addNewUser:", error);
    throw error; // Re-throw the error for the component to handle
  }
}
export function SignupContextFun(props) {
  return (
    <SignupContext.Provider value={{ addNewUser }}>
      {props.children}
    </SignupContext.Provider>
  );
}
