import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdvancedSearch() {
  const jobTypes = [
    "Full-Time",
    "Part-Time",
    "Contract",
    "Internship",
    "Temporary",
    "Freelance",
    "On-site",
    "Hybrid",
    "Remote",
  ];
  const educationLevels = [
    "High School",
    "Associate",
    "Bachelor",
    "Master",
    "Doctorate",
  ];
  const yearsOfExperience = [
    "0-1 years",
    "1-3 years",
    "3-5 years",
    "5-7 years",
    "7+ years",
  ];
  const jobCategories = [
    "Software Development",
    "Web Development",
    "Data Science",
    "Accounting",
    "Finance",
    "Administrative",
    "Architecture",
    "Engineering",
    "Art & Design",
    "Customer Service",
    "Education",
    "Healthcare",
    "Human Resources",
    "Legal",
    "Logistics",
    "Marketing",
    "Media",
    "Non-Profit",
    "Operations Management",
    "Project Management",
    "Research",
    "Retail",
    "Sales",
    "Security",
    "Social Services",
    "Writing",
  ];

  return (
    <div className="h-screen">
      <div>
        <div className="grid w-full max-w-sm  gap-1.5">
          <Label htmlFor="Title">Title</Label>
          <Input type="text" id="Title" placeholder="Title" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="Location">Location</Label>
          <Input type="text" id="Location" placeholder="Location" />
        </div>
      </div>
      <div className="grid grid-cols-2 w-[500px] gap-6">
        {/* Job Type */}
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              {jobTypes.map((type) => (
                <SelectItem
                  key={type}
                  value={type.toLowerCase().replace(" ", "-")}
                >
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Education Level */}
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Education Level" />
            </SelectTrigger>
            <SelectContent>
              {educationLevels.map((level) => (
                <SelectItem
                  key={level}
                  value={level.toLowerCase().replace(" ", "-")}
                >
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Years of Experience */}
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Years of Experience" />
            </SelectTrigger>
            <SelectContent>
              {yearsOfExperience.map((years) => (
                <SelectItem
                  key={years}
                  value={years.toLowerCase().replace(" ", "-")}
                >
                  {years}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Category */}
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Job Category" />
            </SelectTrigger>
            <SelectContent>
              {jobCategories.map((category) => (
                <SelectItem
                  key={category}
                  value={category.toLowerCase().replace(" ", "-")}
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
