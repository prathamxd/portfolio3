import "../app/globals.css";

const scrollTags = ["UI/UX", "DEVELOPER", "RESEARCH", "DESIGNS", "FRONTEND"];

const Tags = ({ bannerClass }) => {
  return (
    <div className="relative w-full overflow-hidden h-10 md:h-20 md:my-5 ">
      <div className="absolute flex">
        <section
          className={`${bannerClass} flex`}
          style={{ "--speed": `${18000}ms` }}
        >
          {scrollTags.map((tag, idx) => (
            <div key={idx} className="md:text-7xl text-3xl font-bold px-16">
              <pre>{tag}</pre>
            </div>
          ))}
        </section>
        <section
          className={`${bannerClass} flex`}
          style={{ "--speed": `${18000}ms` }}
        >
          {scrollTags.map((tag, idx) => (
            <div key={idx} className="md:text-7xl text-3xl font-bold px-16">
              <pre>{tag}</pre>
            </div>
          ))}
        </section>
        <section
          className={`${bannerClass} flex`}
          style={{ "--speed": `${18000}ms` }}
        >
          {scrollTags.map((tag, idx) => (
            <div key={idx} className="md:text-7xl text-3xl font-bold px-16">
              <pre>{tag}</pre>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

const ScrollEffect = () => {
  return (
    <div className="App">
      <Tags bannerClass="banner" />
      <Tags bannerClass="reverseBanner" />
    </div>
  );
};

export default ScrollEffect;
