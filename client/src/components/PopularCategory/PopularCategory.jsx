import CategoryCard from "../CategoryCard/CategoryCard";
import { Separator } from "@/components/ui/separator";

export default function () {
  return (
    <div className="mb-20">
      <div class="relative flex py-5  items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-2xl text-gray-700 font-poppins">
          Popular jobs
        </span>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <div className=" flex flex-row justify-center">
        <div className=" grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 justify-items-center mt-16 gap-6 place-content-center">
          <CategoryCard title={"Developer"} numberOfLisitngs={"41"} />
          <CategoryCard title={"Designer"} numberOfLisitngs={"13"} />
          <CategoryCard title={"Manager"} numberOfLisitngs={"27"} />
          <CategoryCard title={"Data Scientist"} numberOfLisitngs={"35"} />
          <CategoryCard title={"Sales Manager"} numberOfLisitngs={"22"} />
          <CategoryCard
            title={"Marketing Specialist"}
            numberOfLisitngs={"19"}
          />
          <CategoryCard title={"Sales"} numberOfLisitngs={"30"} />
          <CategoryCard title={"DevOps"} numberOfLisitngs={"15"} />
          <CategoryCard title={"HR Specialist"} numberOfLisitngs={"25"} />
        </div>
      </div>
      <div className="mt-20 w-screen flex flex-col gap-8  items-center justify-center">
        <div className="text-2xl text-gray-700 font-poppins md:text-3xl">
          Are you an employer?
        </div>
        <div className="text-[1rem] md:text-xl text-gray-700 font-poppins">
          Register your company and post your job listings
        </div>
      </div>
    </div>
  );
}
