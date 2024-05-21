import "../app/globals.css";

const scrollTags = ["UI`UX", "DEVELOPER", "RESEARCH", "DESIGNS", "FRONTEND"];

const Tags = ({ bannerClass }) => {
  return (
    <div className="relative w-full overflow-hidden h-20 my-5">
      <div className="absolute flex">
        <section
          className={`${bannerClass} flex`}
          style={{ "--speed": `${18000}ms` }}
        >
          {scrollTags.map((tag, idx) => (
            <div key={idx} className="text-7xl font-bold px-16">
              <p>{tag}</p>
            </div>
          ))}
        </section>
        <section
          className={`${bannerClass} flex`}
          style={{ "--speed": `${18000}ms` }}
        >
          {scrollTags.map((tag, idx) => (
            <div key={idx} className="text-7xl font-bold px-16">
              <p>{tag}</p>
            </div>
          ))}
        </section>
        <section
          className={`${bannerClass} flex`}
          style={{ "--speed": `${18000}ms` }}
        >
          {scrollTags.map((tag, idx) => (
            <div key={idx} className="text-7xl font-bold px-16">
              <p>{tag}</p>
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
