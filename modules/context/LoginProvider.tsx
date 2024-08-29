"use client";
import React, { useEffect, useCallback, useMemo, useState } from "react";
import Cookies from "js-cookie";
import LoginContextType from "./LoginContextType";
import LoginResponse from "../user/dto/LoginResponse";
import { useRouter } from "next/navigation";
import UpdateResponse from "../user/dto/UpdateResponse";

type LoginProviderProps = {
  children?: React.ReactNode;
};

export const LoginContext = React.createContext<LoginContextType | undefined>(
  undefined
);

const defaultUserState: LoginResponse = {
  token: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  active: false,
  profileUrl: "",
  userRole: "",
};

const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [user, setUser] = useState<LoginResponse>(defaultUserState);
  const router = useRouter();
  // Function to update user state and set cookie
  const setUserCookie = useCallback((user: LoginResponse): void => {
    setUser(user);
    Cookies.set("user", JSON.stringify(user));
  }, []);

  // Restore user from cookie on mount
  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      try {
        const parsedUser = JSON.parse(userCookie);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user cookie", error);
        Cookies.remove("user");
      }
    }
  }, []);

  // Log out function to clear user state and remove cookie
  const logOut = useCallback((): void => {
    setUser(defaultUserState);
    Cookies.remove("user");

    setTimeout(() => {
      router.push("/login");
    }, 1000);
  }, []);

  // CHANGE IMAGE URL 

  const changeImage = useCallback((url: string): void => {
    setUser({
      ...user,
      profileUrl: url,
    });
  }, [user]);


  const updateUser = useCallback((newUser: UpdateResponse): void => {
    setUser({
      ...user,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phoneNumber: newUser.phoneNumber,
      email: newUser.email,
      active: newUser.active,
      userRole: newUser.userRole,
      profileUrl: newUser.profileUrl,
    });
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      user,
      setUserCookie,
      changeImage,
      updateUser,
      logOut,
    }),
    [user, setUserCookie,changeImage, logOut]
  );

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
