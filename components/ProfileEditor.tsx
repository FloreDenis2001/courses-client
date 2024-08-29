"use client";
import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ButtonFull from "@/components/ButtonFull";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import UserService from "@/modules/user/services/UserService";
import { LoginContext } from "@/modules/context/LoginProvider";
import LoginContextType from "@/modules/context/LoginContextType";
import Link from "next/link";

const ProfileEditor: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const { user, updateUser } = useContext(LoginContext) as LoginContextType;
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = () => {
      try {
        if (user) {
          setFormData({
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            phoneNumber: user.phoneNumber || "",
            email: user.email || "",
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          });
        }
      } catch (err) {
        toast.error("Failed to fetch user data. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    };
  
    fetchUserData();
  }, [user]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    try {
      const userService = new UserService();
      const token = user?.token || ""; 

      const updatedUserData = await userService.updateProfile(
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
        token
      );

      toast.success("Profile updated successfully!", {
        position: "top-center",
        autoClose: 3000,
      });

      updateUser(updatedUserData);

      router.push("/profile");
    } catch (err) {
      toast.error("Failed to update profile. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <motion.section
      className="flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-start font-jakarta bg-secondary max-w-screen-lg w-full relative z-10 rounded-xl mx-auto shadow-md flex flex-col items-center p-6 border border-gray-200"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl xl:text-3xl font-extrabold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Edit Profile
        </motion.h1>

        <motion.form
          onSubmit={handleUpdateProfile}
          className="mx-auto max-w-xs flex flex-col gap-4 items-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:bg-white"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:bg-white"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:bg-white"
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            pattern="^[0-9]{10}$"
            title="Phone number must be 10 digits"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-primary focus:bg-white"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-primary focus:bg-white"
            type="password"
            placeholder="Current Password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-primary focus:bg-white"
            type="password"
            placeholder="New Password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
          <input
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-400 text-sm focus:outline-none focus:border-primary focus:bg-white"
            type="password"
            placeholder="Confirm New Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <ButtonFull text={loading ? "Updating..." : "Update Profile"} />

          <p className="mt-6 text-xs text-gray-600 text-center">
            <Link
              href="/"
              className="border-b border-gray-500 hover:text-primary hover:border-primary border-dotted"
            >
              Back to Home
            </Link>
          </p>
        </motion.form>
      </motion.div>

      <ToastContainer />
    </motion.section>
  );
};

export default ProfileEditor;
