import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {useRouter} from "next/navigation";

const Modal = ({ user, token, onUpdate }) => {
  const [firstName, setFirstName] = useState(user.personalInfo.firstName);
  const [lastName, setLastName] = useState(user.personalInfo.lastName);
  const [location, setLocation] = useState(user.personalInfo.location);
  const router = useRouter();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('location', location);
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/update-profile`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
  
      if (res.ok) {
        console.log('Profile updated successfully');
      } else {
        console.error('Failed to save profile:', res.status, await res.text());
        
      }
    } catch (error) {
      console.error('Failed to save profile:', error.message);
      
    }
    window.location.reload()
  };
  

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-md bg-[#263238] text-white px-4 py-1 absolute top-2 right-2 md:top-32 md:right-5" variant="outline">
          Edit profile
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSave}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="text-right">
              First name
            </Label>
            <Input id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-right">
              Last name
            </Label>
            <Input id="username" value={lastName} onChange={(e) => setLastName(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" >Save changes</Button>
          </SheetClose>
        </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default Modal;
