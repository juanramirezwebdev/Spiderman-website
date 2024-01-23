import footerdata from '../data/footerData';

function Footer() {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contact Me</h4>
            <p>
              <span className="me-2">
                <img src="https://static.vecteezy.com/system/resources/previews/023/618/290/non_2x/email-icon-clipart-free-free-png.png" alt="Email icon" style={{ width: '24px', height: '24px' }} />
              </span>
              Email: <a href="mailto:juanramirezrueda11@gmail.com" className="text-light">juanramirezrueda11@gmail.com</a>
            </p>
          </div>
          <div className="col-md-6">
            <h4>Follow Me</h4>
            {footerdata.map((footer, index) => (
              <p key={index}>
                <a href={footer.linkUrl} className="text-light d-flex align-items-center">
                  <img src={footer.iconUrl} alt={`${footer.name} icon`} className="footer-icon me-2" style={{ width: '24px', height: '24px' }} />
                  {footer.name}
                </a>
              </p>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p >© 2023 Juan Ramirez Web Dev. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
