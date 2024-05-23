const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="flex justify-center py-5 px-36 border-t-[1px] border-gray-800">
      <p>© {year} Pratham Kumar Luker</p>
    </div>
  );
};

export default Footer;
