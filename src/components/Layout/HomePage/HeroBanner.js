const HeroBanner = () => {
  return (
    <div className="text-center mt-12 md:pb-8">
      <h1
        className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
        data-aos="zoom-y-out"
      >
        Malcom in the{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F87272] to-[#EF9FBC]">
          middle
        </span>
      </h1>
      <div className="max-w-3xl mx-auto">
        <p
          className="text-xl text-gray-600"
          data-aos="zoom-y-out"
          data-aos-delay="150"
        >
          Struggling to find a convenient place to meet your friends? Why not
          meet them in the middle.
        </p>
        {/* <div
          className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
          data-aos="zoom-y-out"
          data-aos-delay="300"
        >
          <div>
            <a
              className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
              href="#0"
            >
              Start free trial
            </a>
          </div>
          <div>
            <a
              className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
              href="#0"
            >
              Learn more
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroBanner;
