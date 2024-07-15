"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const [profileData, setProfileData] = useState(null);
  const [accessToken, setAccessToken] = useState("");
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

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setAccessToken(token);
    if (accessToken) {
      fetchProfileData(token);
    }
  }, [accessToken]);

  const logout = () => {
    localStorage.removeItem("access_token");
    setProfileData(null);
    router.push("/login");
  };
  const setAccessTokenFunction = async (token) => {
    setAccessToken(token)
  };


  return { profileData, setProfileData, logout , fetchProfileData, setAccessTokenFunction};
};

export default useAuth;
