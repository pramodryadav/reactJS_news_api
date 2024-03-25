import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { userContext } from "../../../context";

const useLogin = () => {

    const {setIsLoggedIn} = useContext(userContext)

    const onSuccess = (credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        setIsLoggedIn(true)
        localStorage.setItem("userData", JSON.stringify(decoded))

    }
    const onError = () => {
        alert('Login Failed');
    }


    return { onSuccess, onError }

}

export default useLogin