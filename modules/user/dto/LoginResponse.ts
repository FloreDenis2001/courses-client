export default interface LoginResponse{
    token : string;
    firstName : string;
    lastName : string;
    phoneNumber : string;
    email : string;
    active : boolean;
    userRole : string;
}