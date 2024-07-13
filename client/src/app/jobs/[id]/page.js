
import JobDetails from "@/components/JobDetails/JobDetails";

export default async function JobDetailsPage({ params }) {
  const id = params.id;

  const res = await fetch(`https://hiredhub-api.onrender.com/api/jobs/${id}`);
  const data = await res.json();

  return (
    <div className="p-5 pb-20 overflow-hidden bg-[#F5F7F8]">
      <JobDetails data={data} />
    </div>

  );

}