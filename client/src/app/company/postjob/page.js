import JobPostingForm from "@/components/JobPostingForm/JobPostingForm";
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const getCategories = async () => {
  const res = await fetch(`${backendUrl}/category`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function JobPost() {
  const categories = await getCategories()
  return (
    <div className="bg-[#F5F7F8] ">
      <JobPostingForm categories={categories} />
    </div>
  );
}
