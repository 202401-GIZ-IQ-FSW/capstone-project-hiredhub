"use client";
import { useEffect, useState } from "react";
import logo from "../../assets/HiredhubLogo.svg";
import Image from "next/image";
import TeamMemberCard from "@/components/aboutUsComponent/TeamMemberCard"; // Adjust the import path as necessary

const AboutPage = () => {
  const githubUsers = [
    "HalwestEast",
    "schinak-m",
    "hanaMohammedAbdullah",
    "Dilan-Ahmed",
    "Mohammed-Nazar",
    "Harivan-T",
  ];
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamData = await Promise.all(
        githubUsers.map(async (user) => {
          const res = await fetch(`https://api.github.com/users/${user}`);
          const data = await res.json();
          return data;
        })
      );
      setTeam(teamData);
    };
    fetchData();
  }, []);

  return (
    <div className="p-5 my-10">
      <div>
        <h3 className="text-xl font-bold text-[#263238] mb-2">About HireHub</h3>
        <p className="text-justify font-light md:pr-10">
          Welcome to HireHub, the ultimate destination for job seekers and
          employers alike. Whether you're a seasoned professional looking for
          your next big opportunity or a company in search of top talent,
          HireHub is here to connect you with the perfect match.
        </p>
      </div>
      <div className="my-10 grid grid-cols-2">
        <div>
          <h4 className="font-bold mb-1">Key Features</h4>
          <ul className="ml-2">
            <li>Job Listings</li>
            <li>Advanced Search</li>
            <li>Quick Apply</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-1">Benefits</h4>
          <ul className="ml-2">
            <li>Diverse Opportunities</li>
            <li>Efficient Hiring</li>
            <li>Seamless Interaction</li>
          </ul>
        </div>
      </div>
      <div className="my-8">
        <h3 className="text-xl font-bold text-[#263238] mb-2">Meet The Team</h3>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-x-10">
          {team.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
      <div className="my-5 mt-20">
        <h3 className="text-xl font-bold text-[#263238] mb-4">
          Mission & Vision
        </h3>
        <div className="p-2 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-[#263238] mb-2">
             Our Mission
            </h3>
            <p>To connect job seekers and employers effortlessly, fostering successful careers and building thriving teams.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#263238] mb-2">
               Our Vision
            </h3>
            <p>To be the leading platform for job discovery and talent acquisition, empowering individuals and organizations to achieve their fullest potential.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
