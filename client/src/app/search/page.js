import BrowseJob from "@/components/BrowseJob/BrowseJob";

export default async function Browse() {
  const res = await fetch("https://hiredhub-api.onrender.com/api/jobs/");
  const data = await res.json();


  return <BrowseJob data={data} />;
}
