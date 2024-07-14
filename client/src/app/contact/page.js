import ContactForm from "@/components/ContactsComponents/ContactForm";
import Map from "@/components/ContactsComponents/Map";

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center my-10 flex-col font-lato">
      <div className="text-center mt-14">
        <h1 className="text-2xl font-bold text-[#263238] mb-2 md:text-5xl">Contact Us</h1>
        <p className="w-80 font-light md:w-96 text-md text-muted-foreground">
          Get in touch with us. We're here to assist you in finding the perfect
          job opportunities.
        </p>
      </div>
      <div className="mt-20 self-start ml-10 md:ml-0 md:px-40 md:grid md:grid-cols-2 md:gap-10 md:w-full">
        <div className="md:w-9/12">
          <ContactForm />
        </div>
        <div className="my-7">
          <Map />
        </div>
      </div>
      <div className="bg-[#F5F7F8] grid grid-cols-2 gap-2 p-5 md:grid-cols-3 md:mt-20 md:w-fit md:gap-52">
        <div className="flex flex-col">
          <h4 className="mb-2 font-semibold">Call us</h4>
          <span className="text-sm mb-1">+964782****</span>
          <span className="text-sm">+964782****</span>
        </div>
        <div className="flex flex-col">
          <h4 className="mb-2 font-semibold">Email Us</h4>
          <span className="text-xs mb-1">contact@hirehhub.com</span>
          <span className="text-xs">contact-ha@hirehhub.com</span>
        </div>
        <div className="flex flex-col">
          <h4 className="mb-2 font-semibold">Visit us</h4>
          <span className="text-xs mb-1">Iraq, Erbil</span>
          <span className="text-xs">Iraq, Baghdad</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
