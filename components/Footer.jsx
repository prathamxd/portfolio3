const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="mt-[27rem] md:mt-0 flex justify-center py-5 font-mono border-t-[1px] border-gray-800">
      <p>© {year} Pratham Kumar Luker</p>
    </div>
  );
};

export default Footer;
