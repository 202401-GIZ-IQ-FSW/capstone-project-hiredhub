import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <div className="flex flex-col w-screen items-center h-screen gap-8 mt-10">
      <div className="xl:w-[700px] w-[300px] md:w-[600px] grid grid-col gap-5 items-center justify-center">
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-poppins">Half Stack Developer</div>

          <div className="text-xl flex font-lato">
            <div className="font-poppins ">Company</div>
            <Dot />
            <div className="flex flex-row font-poppins">
              <MapPin size={20} />
              New York, NY
            </div>
          </div>
          <div>
            <Badge variant="outline">Open</Badge>
            <Badge variant="outline">Remote</Badge>
          </div>
        </div>
        <div className="font-poppins ">
          <div className="font-xl font-poppins mb-2">About this job</div>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
        <div>
          <div>Details</div>
          <div>Skills: Javascript, CSS, HTML</div>
          <div>Years of experience: 1-5 years</div>
        </div>
      </div>
      <Button className="w-[200px] bg-[#263238] hover:bg-[#3f4f56]">
        Apply
      </Button>
    </div>
  );
}
