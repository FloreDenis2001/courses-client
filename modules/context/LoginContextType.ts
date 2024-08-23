import LoginResponse from "../user/dto/LoginResponse";
import { LoginContext } from "./LoginProvider"

type LoginContextType = {
    user : LoginResponse;
    setUserCookie : (user:LoginResponse) => void;
    logOut : () => void;
}

export default LoginContextType;