import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <>
    <Link href={'#'}>
        <Card className="bg-[#263238] hover:bg-[#263238]/[0.95] w-[250px] text-slate-50 pr-10 py-1">
          <CardHeader>
            <CardTitle className="font-poppins font-semibold">Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-200 font-poppins">24 Job Listings</p>
          </CardContent>
        </Card>
    </Link>
    </>
  );
};

export default CategoryCard;
