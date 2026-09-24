import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-5 items-center bg-base-200">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee>

      <p className="font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
      </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
