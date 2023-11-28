import axios from "axios";
import { createContext } from "react";

export const LoginContext = createContext();

// Function that enables the user to login
async function loginUser(values) {
  try {
    const response = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/auth/signin`,
      values
    );

    // Assuming your API returns data on success
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    // Handle specific error cases, extract relevant information
    return {
      success: false,
      error: error.response
        ? error.response.data
        : "An unexpected error occurred",
    };
  }
}

export default function LoginContextFun(props) {
  return (
    <LoginContext.Provider value={{ loginUser }}>
      {props.children}
    </LoginContext.Provider>
  );
}
