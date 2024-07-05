"use client";
import {
  Description,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
} from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "../ui/button";

function JobInfo({ job }) {
  const [jobInfo, setJobInfo] = useState(false);
  const handlerDialog = () => {
    setJobInfo(!jobInfo);
    console.log(jobInfo);
  };

  return (
    <div className=' max-w-lg'>
      <h1 className='text-start text-xl'>{job.title}</h1>
      <div>
        <p>company: {job.company}</p>
        <p>Locaion: {job.location}</p>
        <p>Job description : {job.description}</p>
        <p> Job Qualification : {job.qualification}</p>
        <p>Job Expirence : {job.expirence}</p>
        <p></p>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button onClick={() => handlerDialog}> Apply </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <Description>
              Are you sure , you applie with the current Cv{" "}
            </Description>
          </DialogHeader>

          <DialogFooter>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default JobInfo;
