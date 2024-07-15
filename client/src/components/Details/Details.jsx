"use client";
import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FaHouse } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Dot } from "lucide-react";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Details = ({ data }) => {
    const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();

    router.push("/application-success");
  }
  return (
    <div>
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card x-chunk="dashboard-01-chunk-0" className="col-span-4">
              <CardHeader className="flex flex-row items-center py-20 justify-between space-y-0 pb-2 bg-gradient-to-r from-[#40A578]  to-[#006769]">
                <CardTitle className="flex text-sm font-medium  -mb-10 w-20 h-20">
                  <div className="flex justify-center items-center w-full">
                    {/* {company?.logo !== undefined ? (
                      <img
                        src={company?.logo}
                        alt={company?.name}
                        width={80}
                        height={80}
                      />
                    ) : (
                      <img src={"/logo-tech.png"} className='' alt='logo' />
                    )} */}
                    <img src={"/logo-tech.png"} className="" alt="logo" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold pt-16 mb-2">
                  {data.companyId.name}
                </div>
                <div className="grid">
                  <p className="text-sm text-muted-foreground">
                    {/* {{company?.location} |{" "}
                    {company?.website && (
                      <Link href={company?.website} className="underline">
                        {" "}
                        {company?.website}
                      </Link>}
                    )} */}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>
                    <div>
                      <div className="text-2xl font-poppins mb-1">
                        {data.title}
                      </div>
                      <div className="text-xl flex gap-2 font-lato text-gray-700 ">
                        <a href={`/company/${data.companyId._id}`}>
                          <div>{data.companyId.name} </div>
                        </a>
                        <Dot />
                        <div className="flex flex-row items-center text-gray-600">
                          <MapPin size={20} />
                          {data.location}
                        </div>
                      </div>

                      <div className="flex flex-row gap-1 font-lato mt-2">
                        {data.status ? (
                          <Badge variant="outline"> {data.status} </Badge>
                        ) : null}
                        <Badge variant="outline">{data.category.name}</Badge>
                        <span>
                          {data.jobType ? (
                            <Badge variant="outline"> {data.jobType} </Badge>
                          ) : null}
                        </span>
                      </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <Button
                        type="submit"
                        className="w-[150px] bg-[#263238] hover:bg-[#3f4f56] font-lato mt-14"
                      >
                        Apply for this job
                      </Button>
                    </form>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  <h1 className="text-lg font-semibold mb-4">About this Job</h1>
                  <p className="text-muted-foreground mb-10">
                    {data.description}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5" className="h-fit">
              <CardContent className="grid gap-8">
                <div class="w-full flex items-center rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                  <ul class="w-full">
                    <li class="w-full border-b-2 border-slate-200 border-opacity-100 p-4 font-semibold dark:border-white/10">
                      Salary
                    </li>
                    <li class="w-full border-b-2 border-slate-200  border-opacity-100 p-4  dark:border-white/10">
                      {data.wage}$
                    </li>
                  </ul>
                </div>
                <div class="w-full flex items-center rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                  <ul class="w-full">
                    <li class="w-full border-b-2 border-slate-200 border-opacity-100 px-4 pb-4 font-semibold dark:border-white/10">
                      Job requirements
                    </li>
                    <li class="w-full border-b-2 border-slate-200  border-opacity-100 p-4  dark:border-white/10">
                      {data.requirements.skills.map((skill) => (
                        <Badge variant="outline" key={skill}>
                          {" "}
                          {skill}{" "}
                        </Badge>
                      ))}
                    </li>
                    <li class="w-full border-b-2 border-slate-200  border-opacity-100 p-4  dark:border-white/10">
                      Degree: {data.requirements.certifications.map((cert) => (
                        <Badge variant="outline" key={cert}>
                          {" "}
                          {cert}{" "}
                        </Badge>
                      ))}
                    </li>
                    <li class="w-full p-4">
                      {data.requirements.yearsOfExperience}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Details;
