const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start mt-5 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/adiporl-binthaisong-97a468137/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-8 h-8"
        href="https://github.com/kiraso"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" className="rounded-md" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
      </a>
     
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/khunannie.kiraso/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
