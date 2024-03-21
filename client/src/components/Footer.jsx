import "../index.css"; // Asegúrate de importar tu archivo CSS si tienes estilos adicionales

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Joosudev - Este proyecto está bajo la Licencia MIT &copy; {currentYear}
      </p>
      <a href="https://github.com/joosudev/controlgastos.git" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/material-rounded/48/ffffff/github.png" alt="GitHub" className="github-icon" />
      </a>
    </footer>
  );
};

export default Footer;
