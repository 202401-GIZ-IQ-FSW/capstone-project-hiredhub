import JobDetail from "@/components/JobDetail/JobDetail";

export default async function () {
  const res = await fetch(
    "https://hiredhub-api.onrender.com/api/jobs/6691adea213ef1fdfb387e73"
  );
  const data = await res.json();
  
  
  return <JobDetail data={data} />;
}
