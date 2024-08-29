import ApiServer from "@/modules/system/ApiServer";
import LoginResponse from "../dto/LoginResponse";
import LoginRequest from "../dto/LoginRequest";
import RegisterRequest from "../dto/RegisterRequest";
import RegisterResponse from "../dto/RegisterResponse";
import UpdateResponse from "../dto/UpdateResponse";
import UpdateRequest from "../dto/UpdateRequest";

class UserService extends ApiServer {
  login = async (user: LoginRequest): Promise<LoginResponse> => {
    const data = await this.api<LoginRequest, LoginResponse>(
      `/login`,
      "POST",
      user,
      ""
    );
    if (data.status === 200) {
      const user = await data.json();
      return user;
    } else {
      return Promise.reject([]);
    }
  };

  register = async(user : RegisterRequest):Promise<RegisterResponse> => {
    const data = await this.api<RegisterRequest, RegisterResponse>(
      `/register`,
      "POST",
      user,
      ""
    );
    if (data.status === 200) {
      const user = await data.json();
      return user;
    } else {
      return Promise.reject([]);
    }
  }


  updateProfile = async (user: UpdateRequest,token:string): Promise<UpdateResponse> => {
    const data = await this.api<UpdateRequest, UpdateResponse>(
      `/updateProfile`,
      "PUT",
      user,
      token
    );
    if (data.status === 200) {
      const user = await data.json();
      return user;
    } else {
      return Promise.reject([]);
    }
  }


  updateProfilePhoto = async (formData: FormData , token:string ): Promise<any> => {
   
    const response = await this.api<FormData, any>(
      `/updateProfilePicture`,
      "POST",
      formData,
      token
    );

    if (response.ok) {
      const data = await response.text();
      return data; 
    } else {
      return Promise.reject("Failed to upload profile photo");
    }
  };
}

export default UserService;
