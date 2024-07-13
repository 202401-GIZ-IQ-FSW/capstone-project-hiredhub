import Image from "next/image";
import emptyStar from "@/../public/white-star.png";
import star from "@/../public/star.svg";
import { Button } from "@/components/ui/button";

const JobCard = ({ job }) => {
  return (
    <div className="relative bg-[#263238] text-white flex flex-col px-5 m-4 py-5 rounded-xl">
      <div className="mb-3">
        <h3 className="font-bold text-xl">{job.title}</h3>
        <span className="font-light text-sm">{job.location}</span>
      </div>
      {true ? (
        <Image
          className="absolute right-5 top-5 cursor-pointer"
          width={20}
          height={20}
          src={emptyStar}
        />
      ) : (
        <Image
          className="absolute right-5 top-5 cursor-pointer"
          width={20}
          height={20}
          src={star}
        />
      )}
      <p className="mb-5 pr-20">
        {job.description.length > 150
          ? job.description?.slice(0, 150) + " ......"
          : job.description}
      </p>
      <Button
        variant="outline"
        className="bg-[#FBFDFC] text-black font-semibold rounded-md p-3  w-fit absolute bottom-5 right-4"
      >
        Apply
      </Button>
    </div>
  );
};

export default JobCard;
