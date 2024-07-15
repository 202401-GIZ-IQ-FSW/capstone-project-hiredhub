"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FaHouse,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const Page = ({ params }) => {
  const [company, setCompany] = useState(null);
  const [error, setError] = useState(null);

  const getCompanyById = async (companyId) => {
    try {
      const response = await fetch(`${backendURL}/companies/${companyId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setCompany(data);
    } catch (error) {
      console.error("Error fetching company data:", error);
      setError(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getCompanyById(params.id);
    }
  }, [params.id]);

  if (error) {
    return <div>Error loading company information.</div>;
  }

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card x-chunk="dashboard-01-chunk-0" className="col-span-4">
              <CardHeader className="flex flex-row items-center py-20 justify-between space-y-0 pb-2 bg-gradient-to-r from-[#40A578] to-[#006769]">
                <CardTitle className="flex text-sm font-medium -mb-10 w-20 h-20">
                  <div className="flex justify-center items-center w-full">
                    <img src={"/logo-tech.png"} className="" alt="logo" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold pt-16 mb-2">
                  {company?.name}
                </div>
                <div className="grid">
                  <p className="text-sm text-muted-foreground">
                    {company?.location} |{" "}
                    {company?.website && (
                      <Link href={company?.website} className="underline">
                        {company?.website}
                      </Link>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Overview</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-muted-foreground mb-10">
                    {company?.description}
                  </p>

                  <h1 className="text-lg font-semibold mb-4">History</h1>
                  <p className="text-muted-foreground mb-10">
                    {company?.history}
                  </p>

                  <h1 className="text-lg font-semibold mb-4">Mission</h1>
                  <p className="text-muted-foreground mb-10">
                    {company?.mission}
                  </p>

                  <h1 className="text-lg font-semibold mb-4">Values</h1>
                  <ul className="text-muted-foreground mb-10 list-disc ml-4">
                    {company?.values &&
                      company?.values.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                  </ul>

                  <h1 className="text-lg font-semibold mb-4">
                    Contact Information
                  </h1>
                  <p className="text-muted-foreground flex items-start text-sm mb-1">
                    <FaHouse size={20} className="mr-2" />
                    {company?.ContactInfo?.address}
                  </p>
                  <p className="text-muted-foreground flex items-start text-sm mb-1">
                    <FaPhoneAlt size={20} className="mr-2" />
                    {company?.ContactInfo?.phone}
                  </p>

                  <p className="text-muted-foreground flex items-start text-sm mb-1">
                    <MdOutlineMailOutline size={20} className="mr-2" />
                    {company?.ContactInfo?.email}
                  </p>

                  {company?.ContactInfo?.facebook && (
                    <p className="text-muted-foreground flex items-start text-sm mb-1">
                      <Link
                        href={company?.ContactInfo?.facebook}
                        className="flex"
                      >
                        <FaFacebook size={20} className="mr-2" />
                        Facebook
                      </Link>
                    </p>
                  )}

                  {company?.ContactInfo?.instagram && (
                    <p className="text-muted-foreground flex items-start text-sm mb-1">
                      <Link
                        href={company?.ContactInfo?.instagram}
                        className="flex"
                      >
                        <FaInstagram size={20} className="mr-2" />
                        Instagram
                      </Link>
                    </p>
                  )}

                  {company?.ContactInfo?.linkedin && (
                    <p className="text-muted-foreground flex items-start text-sm mb-1">
                      <Link
                        href={company?.ContactInfo?.linkedin}
                        className="flex"
                      >
                        <FaLinkedin size={20} className="mr-2" />
                        LinkedIn
                      </Link>
                    </p>
                  )}

                  {company?.ContactInfo?.twitter && (
                    <p className="text-muted-foreground flex items-start text-sm mb-1">
                      <Link
                        href={company?.ContactInfo?.twitter}
                        className="flex"
                      >
                        <FaXTwitter size={20} className="mr-2" />
                        Twitter
                      </Link>
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5" className="h-fit">
              <CardHeader>
                <CardTitle>CEO Information</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Name</p>
                    <p className="text-sm text-muted-foreground">
                      {company?.CEO?.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Bio</p>
                    <p className="text-sm text-muted-foreground">
                      {company?.CEO?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">LinkedIn</p>
                    <p className="text-sm text-muted-foreground underline">
                      {company?.CEO?.linkedin && (
                        <Link href={company?.CEO?.linkedin}>
                          {company?.CEO?.linkedin}
                        </Link>
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">Twitter</p>
                    <p className="text-sm text-muted-foreground underline">
                      {company?.CEO?.twitter && (
                        <Link href={company?.CEO?.twitter}>
                          {company?.CEO?.twitter}
                        </Link>
                      )}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
