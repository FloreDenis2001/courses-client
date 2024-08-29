import LoginResponse from "../user/dto/LoginResponse";
import UpdateResponse from "../user/dto/UpdateResponse";
import { LoginContext } from "./LoginProvider"

type LoginContextType = {
    user : LoginResponse;
    setUserCookie : (user:LoginResponse) => void;
    updateUser : (newUser: UpdateResponse) => void;
    changeImage : (url:string) => void;
    logOut : () => void;
}

export default LoginContextType;