import { createContext } from "react";
import axios from "axios";
export const WishListContext = createContext();
export default function WishListContextFun(props) {
    let headers = {
        token: localStorage.getItem('userToken')
    }
    async function addToWishList(productId) {
        return await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",
            { productId },
            { headers }
        )
            .then(result => result)
            .catch(error => error)
    }
    return (
        <WishListContext.Provider value={{ addToWishList }}>
            {props.children}
        </WishListContext.Provider>
    )
}
