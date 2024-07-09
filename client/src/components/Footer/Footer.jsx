import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import Image from "next/image";
import logo from "../../assets/HiredhubLogo.svg";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];

  const links = [
    {
      id: 1,
      link: "Browse",
    },
    {
      id: 2,
      link: "jobs",
    },
    {
      id: 3,
      link: "Post Jobs",
    },
    {
      id: 4,
      link: "about us",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <>
      <footer className="bg-[#f5f8f6] border-t-2">
        <div className="container mx-auto  py-[10rem]">
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <Image src={logo} alt="footer_logo" className="w-[18rem]" />

              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#bbb9ba] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
