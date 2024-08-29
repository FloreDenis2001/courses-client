"use client";
import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import userProfile from "@/assets/logo.png";
import ProfileMenu from "@/components/ProfileMenu";
import { useInView } from "react-intersection-observer";
import ProfilePublic from "@/components/ProfilePublic";
import ProfileEditor from "@/components/ProfileEditor";
import ProfilePhoto from "@/components/ProfilePhoto";
import ProfileInvoices from "@/components/ProfileInvoices";
import ProfilePaymentMethods from "@/components/ProfilePaymentMethods";
import ProfileNotifications from "@/components/ProfileNotifications";
import ProfileCloseAccount from "@/components/ProfileCloseAccount";
import { LoginContext } from "@/modules/context/LoginProvider";
import LoginContextType from "@/modules/context/LoginContextType";

interface Invoice {
  id: string;
  date: string;
  amount: string;
}

interface User {
  name: string;
  profilePicture: StaticImageData;
  enrolledCourses: string[];
  invoices: Invoice[];
}

const ProfilePage: React.FC = () => {
  const { user } = useContext(LoginContext) as LoginContextType;

  const [selectedSection, setSelectedSection] =
    useState<string>("public-profile");

  const { ref: profileRef, inView: profileInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const userC: User = {
    name: "Ana Buda",
    profilePicture: userProfile,
    enrolledCourses: ["Advanced Lash Techniques", "Basic Lash Styling"],
    invoices: [
      { id: "INV001", date: "2024-07-15", amount: "$300" },
      { id: "INV002", date: "2024-08-10", amount: "$450" },
    ],
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "public-profile":
        return <ProfilePublic user={userC} />;
      case "profile":
        return <ProfileEditor />;
      case "photography":
        return <ProfilePhoto />;
      case "invoices":
        return <ProfileInvoices invoices={userC.invoices} />;
      case "payment-methods":
        return <ProfilePaymentMethods />;
      case "notifications":
        return <ProfileNotifications />;
      case "close-account":
        return <ProfileCloseAccount />;
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-col items-center justify-center mt-20 mx-4 md:py-4">
      <motion.div
        className="mt-8 md:mt-6 relative font-jakarta grid min-h-[80vh] grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-screen-lg mx-auto px-4 md:px-6 bg-secondary rounded-xl p-8 shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: profileInView ? 1 : 0, y: profileInView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="bg-secondary py-4 shadow-lg rounded-lg border border-gray-200 col-span-1 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: profileInView ? 1 : 0,
            x: profileInView ? 0 : -20,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          ref={profileRef}
        >
          {user.profileUrl.length > 0 ? (


            <Image
              src={user.profileUrl}
              className="rounded-full w-40 h-40 fit-cover  border-2 border-primary"
              width={40}
              height={40}
              alt="Profile Picture"
            />
          ) : (
            <Image
              src={userC.profilePicture}
              className="rounded-full w-40 h-40 fit-cover  border-2 border-primary"
              width={40}
              height={40}
              alt="Profile Picture"
            />
          )}

          <h1 className="text-3xl font-extrabold mt-4">
            {user.firstName} {user.lastName}
          </h1>

          <ProfileMenu
            onSelect={setSelectedSection}
            selectedSection={selectedSection}
          />
        </motion.div>

        <motion.div
          className="col-span-2 flex flex-col space-y-4 "
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: profileInView ? 1 : 0,
            x: profileInView ? 0 : 20,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {renderContent()}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProfilePage;
