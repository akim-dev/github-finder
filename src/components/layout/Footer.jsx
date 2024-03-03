function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-800 text-gray-300">
      <p>Copyright &copy; {currentYear} My Website</p>
    </footer>
  );
}

export default Footer;
