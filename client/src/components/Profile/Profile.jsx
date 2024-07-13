import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { signUpSchema } from "@/validations/validationSchema";
import { RiInformation2Line } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <Card className="mx-auto max-w-md font-lato">
        <CardHeader>
          <CardTitle className="text-2xl font-lato">
            Set up your profile
          </CardTitle>
          <CardDescription className="text-md">
            Fill out yout Profile information
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
