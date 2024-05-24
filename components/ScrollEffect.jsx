import "../app/globals.css";

const scrollTags = ["UI/UX", "DEVELOPER", "RESEARCH", "DESIGNS", "FRONTEND"];

const Tags = ({ bannerClass }) => {
  return (
    <div className="relative w-full overflow-hidden h-20 md:my-5 -my-5 pt-10">
      <div className="absolute flex">
        <section
          className={`${bannerClass} flex`}
          style={{ "--speed": `${18000}ms` }}
        >
          {scrollTags.map((tag, idx) => (
            <div key={idx} className="md:text-7xl text-3xl font-bold md:px-16 px-5">
              <pre>{tag}</pre>
            </div>
          ))}
        </section>
        <section
          className={`${bannerClass} flex`}
          style={{ "--speed": `${18000}ms` }}
        >
          {scrollTags.map((tag, idx) => (
            <div key={idx} className="md:text-7xl text-3xl font-bold md:px-16 px-5">
              <pre>{tag}</pre>
            </div>
          ))}
        </section>
        <section
          className={`${bannerClass} flex`}
          style={{ "--speed": `${18000}ms` }}
        >
          {scrollTags.map((tag, idx) => (
            <div key={idx} className="md:text-7xl text-3xl font-bold md:px-16 px-5">
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
