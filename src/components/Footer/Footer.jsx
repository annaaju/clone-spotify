
// eslint-disable-next-line react/prop-types
const Footer = ({ onHideFooter }) => {
  
  const handleButtonClick = () => {
    onHideFooter()
  }

  return (
    <footer>
      <div className="disclaimer-premium">
        <div className="text">
          <p className="disclaimer-premium__title">Testar o Premium de graça</p>
          <p className="disclaimer-premium__subtitle">
            Inscreva-se para curtir música ilimitada e podcasts só com alguns
            anúncios. Não precisa de cartão de crédito.
          </p>
        </div>
        <div className="buttons-container">
          <button type="button" className="buttonIns">
            Inscreva-se grátis
          </button>
          <button className="close" type="button" onClick={handleButtonClick}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
