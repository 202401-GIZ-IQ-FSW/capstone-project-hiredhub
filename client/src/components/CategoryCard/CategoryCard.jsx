import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <>
    <Link href={'#'}>
        <Card className="bg-[#263238] hover:bg-[#263238]/[0.95] text-slate-50 pr-10 py-1">
          <CardHeader>
            <CardTitle>Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-200">24 Job Listings</p>
          </CardContent>
        </Card>
    </Link>
    </>
  );
};

export default CategoryCard;
