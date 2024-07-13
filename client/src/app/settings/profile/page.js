"use client";
import { useState } from "react";
import Image from "next/image";
import ApplicationHistory from "./ApplicationHistory";
import SavedJobs from "./SavedJobs";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Modal = ({ user }) => {
  return (
    <div>
      <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-md bg-[#263238] text-white px-4 py-1 absolute top-2 right-2 md:top-32 md:right-5" variant="outline">Edit profile</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={user.personalInfo.fullName} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value={`@${user.personalInfo.fullName}`} className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>

    </div>
  );
};

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    _id: "60d21b4667d0d8992e610c85",
    userId: "60c72b2f9b1d8a001c8e4d52",
    personalInfo: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "0123456789",
      location: "New York, NY",
      resume: "https://example.com/resume/johndoe.pdf",
      profilePicture:
        "https://cdn.vectorstock.com/i/500p/17/61/male-avatar-profile-picture-vector-10211761.jpg",
      fullName: "John Doe",
    },
    applications: ["60d21b4667d0d8992e610c86", "60d21b4667d0d8992e610c87"],
    savedJobs: ["60d21b4667d0d8992e610c88", "60d21b4667d0d8992e610c89"],
    createdAt: "2023-07-12T08:00:00.000Z",
    updatedAt: "2023-07-12T08:00:00.000Z",
  });
  const [modal, setModal] = useState(false);

  return (
    <div className=" relative mb-10">
      <div className="flex flex-col justify-center  items-center pt-14 border-b-[1px] border-black
      md:flex-row md:items-start md:justify-start md:px-36 md:py-20">
        <img
        alt="profile image"
          className="w-28 rounded-full"
          src={userInfo.personalInfo.profilePicture}
        />
        <div className="my-4 flex flex-col items-center md:items-start ml-10">
          <h4 className="text-2xl text-[#263238] ">
            {userInfo.personalInfo.fullName}
          </h4>
          <span className="text-[#363333] font-extralight text-sm mt-1">
            {userInfo.personalInfo.location}
          </span>
          <p className="text-sm self-start px-10 my-4 text-justify md:px-0 md:w-8/12">
            Full Stack Developer skilled in designing and building complete web
            applications, handling both front-end and back-end development.
          </p>
          <Modal user={userInfo}/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="border-b-[1px] border-black md:border-r-[1px] pr-5 md:border-b-0">
            <h3 className="text-center mt-8 font-semibold">Application History</h3>
            <ApplicationHistory/>
        </div>
        <div>
        <h3 className="text-center mt-8 font-semibold">Saved Jobs</h3>
        <SavedJobs/>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
