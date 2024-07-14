import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const CategoryCard = ({ title, numberOfLisitngs }) => {
  return (
    <>
      <Link href={"#"}>
        <Card className="bg-[#263238] hover:bg-[#263238]/[0.95] w-[250px] text-slate-50 pr-10 py-1">
          <CardHeader>
            <CardTitle className="font-poppins font-semibold">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-200 font-poppins">
              {numberOfLisitngs} Job listings
            </p>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default CategoryCard;
