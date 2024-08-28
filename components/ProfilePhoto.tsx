"use client";
import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import userProfile from "@/assets/logo.png"; 
import UserService from "@/modules/user/services/UserService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "@/modules/context/LoginProvider";
import LoginContextType from "@/modules/context/LoginContextType";

const ProfilePhoto: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(LoginContext) as LoginContextType;

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  }, [selectedFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const userService = new UserService();
      console.log(user.token);
      const response = await userService.updateProfilePhoto(
        formData,
        user.token
      );
      user.profileUrl = response.profileUrl;
      toast.success("Profile photo updated successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Failed to upload profile photo. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white py-6 px-8 shadow-lg rounded-lg border border-gray-200 col-span-1 flex flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Actualizează-ți fotografia de profil
      </h2>
      <div className="relative w-40 h-40 mb-4">
        {user.profileUrl.length < 0 ? (
          <Image
            src={user.profileUrl}
            className="rounded-full w-40 h-40 fit-cover  border-2 border-primary"
            width={40}
            height={40}
            alt="Profile Picture"
          />
        ) : (
          <Image
            src={userProfile}
            className="rounded-full w-40 h-40 fit-cover  border-2 border-primary"
            width={40}
            height={40}
            alt="Profile Picture"
          />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Apasă pe imagine pentru a selecta o nouă fotografie.
      </p>
      <button
        onClick={handleUpload}
        className={`px-6 py-2 rounded-lg text-white transition-colors ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-primary hover:bg-primary-dark"
        }`}
        disabled={loading}
      >
        {loading ? "Se încarcă..." : "Încarcă Fotografia"}
      </button>

      <ToastContainer />
    </motion.div>
  );
};

export default ProfilePhoto;
