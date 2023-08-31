import './Intro.css'

const Footer = () => {
  const footerStyle = {
    textAlign: 'center',
    color: 'white',
    padding: '10px',
    fontSize: '14px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'underline',
  };

  return (
    <footer style={footerStyle}>
        <p style={{marginBottom: '12px'}}>&copy; {new Date().getFullYear()} <a href="https://nihalmenon.com" style={{textDecoration: 'underline'}}>Nihal Menon</a>.</p>
    </footer>
  );
};

export default Footer;
