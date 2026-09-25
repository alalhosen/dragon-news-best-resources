import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;

const LatestNews = () => {


  return (
    <div className="flex gap-5 items-center bg-base-200">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      {/* <Marquee> */}
      <Marquee className="flex gap-5" pauseOnHover={true}>
          <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        </p>
          <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        </p>
          <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        </p>
          <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
        </p>
      </Marquee>
      
      {/* </Marquee> */}
    </div>
  );
};

export default LatestNews;
