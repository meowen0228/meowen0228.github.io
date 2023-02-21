import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
const socialInfo = [
  {
    icon: <AiOutlineMail title='Email' size={28} />,
    link: "mailto:meowen0228@gmail.com",
    target: "",
  },
  {
    icon: <AiOutlineGithub title='Github' size={28} />,
    link: "https://github.com/meowen0228?tab=repositories",
    target: "_blank",
  },
  {
    icon: <AiOutlineLinkedin title='Linkedin' size={28} />,
    link: "https://www.linkedin.com/in/meowen-chang-783b00249",
    target: "_blank",
  },
];

const SocialInfo = () => {
  return (
    <div className='contact_me'>
      {socialInfo.map((v, i) => {
        return (
          <a key={i} href={v.link} target={v.target} rel='noreferrer'>
            {v.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialInfo;
