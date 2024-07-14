import CompanyForm from "../../../../components/CompanyForm/CompanyForm.jsx";

export default function CreateProfile() {
  return (
    <div className="my-6 py-4 mx-auto max-w-lg font-lato">
      <h1 className="text-4xl mb-8 font-extrabold text-[#263238] text-center">
        Create your porfile to get started
      </h1>
      <CompanyForm />
    </div>
  );
}
