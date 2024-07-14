import { useState } from "react";
import Modal from "./Modal";
import ApplicationHistory from "./ApplicationHistory";
import SavedJobs from "./SavedJobs";

const ProfilePage = ({ profileData, token }) => {
  const [userInfo, setUserInfo] = useState(profileData);
  const [modal, setModal] = useState(true);

  const handleUpdateUser = (updatedUser) => {
    setUserInfo(updatedUser);
    setModal(false); 
  };

  return (
    <div className="relative mb-10">
      <div className="flex flex-col justify-center items-center pt-14 border-b-[1px] border-black md:flex-row md:items-start md:justify-start md:px-36 md:py-20">
        <img
          alt="profile image"
          className="w-28 rounded-full"
          src={"https://cdn.vectorstock.com/i/500p/17/61/male-avatar-profile-picture-vector-10211761.jpg"}
        />
        <div className="my-4 flex flex-col items-center md:items-start md:ml-10">
          <h4 className="text-2xl text-[#263238] ">
            {userInfo.personalInfo.fullName}
          </h4>
          <span className="text-[#363333] font-extralight text-sm mt-1">
            {userInfo.personalInfo.location}
          </span>
          {/* */}
          <Modal user={userInfo} token={token} onUpdate={handleUpdateUser} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border-b-[1px] border-black md:border-r-[1px] pr-5 md:border-b-0">
          <h3 className="text-center mt-8 font-semibold">Application History</h3>
          {/* */}
          <ApplicationHistory applications={profileData.applications} />
        </div>
        <div>
          <h3 className="text-center mt-8 font-semibold">Saved Jobs</h3>
          {/*  */}
          <SavedJobs jobs={profileData.SavedJobs} token={token} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
