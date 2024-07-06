import { Button } from "../ui/button";

function JobInfo({ job }) {
  return (
    <div className=' max-w-lg'>
      <h1 className='text-start text-xl'>{job.title}</h1>
      <div>
        <p>company: {job.company}</p>
        <p>Locaion: {job.location}</p>
        <p>Job description : {job.description}</p>
        <p> Job Qualification : {job.qualification}</p>
        <p>Job Expirence : {job.expirence}</p>
      </div>

      <Button> Apply </Button>
    </div>
  );
}

export default JobInfo;
