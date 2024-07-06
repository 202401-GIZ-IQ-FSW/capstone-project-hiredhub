import CategoryCard from "../CategoryCard/CategoryCard";
import { Separator } from "@/components/ui/separator";

export default function () {
  return (
    <div>
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-xl text-gray-900">Popular jobs</span>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <div className=" w-screen flex flex-row justify-center">
        <div className="w-max grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 justify-items-center mt-16 gap-6 place-content-center">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <div className="mt-20 w-screen flex flex-col gap-8  items-center justify-center">
        <div className="text-3xl">Are you an employer?</div>
        <div className="text-2xl">
          Register your company and post your job listings
        </div>
      </div>
    </div>
  );
}
