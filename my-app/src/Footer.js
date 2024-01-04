const Footer = ({ translations, language }) => {
  return (
    <div>
      <h3>{translations[language].madeBy}MindX 🔥</h3>
      <div>
        <span>{translations[language].availableOn}</span>
        <span className="languague-picker">🇻🇳</span>
        <span className="languague-picker selected">🇺🇸</span>
      </div>
    </div>
  );
};

export default Footer;
