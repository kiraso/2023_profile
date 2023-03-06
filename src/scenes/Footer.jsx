import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-auto bg-red pt-10 font-opensans">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-start md:justify-between text-center ">
          <div className="font-semibold text-lg mb-5 mt-2">
          <p>Adiporn Binthaisong (Annie)</p> 
         
          </div>
          <p className="font-semibold text-lg text-gray">
           tel. +66 0932421155
           <span className="ml-2"> Email: Kiraso74@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
