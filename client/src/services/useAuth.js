"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const [profileData, setProfileData] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [role , setRole] = useState("");
  const router = useRouter();

  const fetchProfileData = async (token) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/details`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      if (res.ok) {
        const data = await res.json();
        setProfileData(data);
        router.push("/");
      } else if (!res.ok) {
        console.error("Error fetching profile data:", res.statusText);
        localStorage.clear();
        router.push("/login");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      localStorage.clear();
      router.push("/login");
    }
  };

  const fetchAllCompanies = async (token, userid)=>{
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/companies/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      if (res.ok) {
        const data = await res.json();
        const myCompany = data.filter((company)=> company.userId == userid);
        console.log(myCompany)
        fetchCompanyDetails(token,myCompany[0]._id)
      } else if (!res.ok) {
        console.error("Error fetching profile data:", res.statusText);
        localStorage.clear();
        router.push("/login");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      localStorage.clear();
      router.push("/login");
    }
  }



  const fetchCompanyDetails = async (token,id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/companies/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("company_id", data._id)
        setProfileData(data);
        router.push("/");
      } else if (!res.ok) {
        console.error("Error fetching profile data:", res.statusText);
        localStorage.clear();
        router.push("/login");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      localStorage.clear();
      router.push("/login");
    }
  };


  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const role = localStorage.getItem("role");
    const id = localStorage.getItem("id");
    setRole(role)
    setAccessToken(token);
    if (accessToken && role == "jobSeeker") {
      fetchProfileData(token);
    }
    if (accessToken && role == "employer") {
      fetchAllCompanies(token, id);
    }
  }, [accessToken]);

  const handleReload = () => {
    window.location.reload();
  };

  const logout = () => {
    localStorage.clear();
    setProfileData(null);
    handleReload();
    router.push("/login");
  };
  const setAccessTokenFunction = async (token) => {
    setAccessToken(token)
  };


  return { profileData, setProfileData, logout , fetchProfileData, setAccessTokenFunction, role};
};

export default useAuth;
