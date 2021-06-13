import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <h2 className="Footer__copyright"> {`Илья Шнырев `}&copy; {new Date().getFullYear()}</h2>
    </div>
  );
};

export default Footer;
