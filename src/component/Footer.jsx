const Footer = () => {
  return (
    <footer className="flex flex-col items-center  border-t-2 border-gray-200 py-2">
      <p>Created By Ahmad Alif Sofian @2023</p>
      <ul className="flex gap-3 flex-wrap items-center">
        <li className="underline underline-offset-4">
          <a href="https://www.linkedin.com/in/alifahmaaad/" target="_blank">
            My Linkedin
          </a>
        </li>
        <li className="underline underline-offset-4">
          <a href="https://alifahmaaad.github.io/" target="_blank">
            My Portofolio Website
          </a>
        </li>
        <li className="underline underline-offset-4">
          <a href="https://github.com/alifahmaaad" target="_blank">
            My Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
