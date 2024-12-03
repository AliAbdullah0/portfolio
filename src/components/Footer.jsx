import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaGit, FaGithub, FaInstagram, FaFacebook, FaMailBulk } from "react-icons/fa";

const socialLinks = [
  { href: "https://web.facebook.com/AliAbdullah190/", icon: <FaFacebook /> },
  { href: "https://www.instagram.com/ali_abdullah.ta/", icon: <FaInstagram /> },
  { href: "https://github.com/AliAbdullah0", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Portfolio 2024. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href=""
          className="text-center text-sm hover:underline md:text-right"
        >
          aliabdullah10nov2006@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;