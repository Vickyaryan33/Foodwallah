// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/vickyaryan33/"
        target="_blank"
        title="Vicky Kumar's Linkedin Profile"
      >
        Vicky Kumar
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Wallah</span>
        </strong>
    </div>
  );
};

export default Footer;
