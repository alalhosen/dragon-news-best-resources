import React from "react";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaStar,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    image_url,
    details,
    tags,
  } = news;

  const date = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm rounded-md">
      
      {/* Author Section */}
      <div className="flex items-center justify-between p-4 border-b border-base-300">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold text-sm">
              {author.name}
            </h3>

            <p className="text-xs text-gray-500">
              {date}
            </p>
          </div>
        </div>

        {/* Bookmark + Share */}
        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-primary">
            <FaRegBookmark size={17} />
          </button>

          <button className="hover:text-primary">
            <FaShareAlt size={17} />
          </button>
        </div>
      </div>

      {/* News Content */}
      <div className="p-4">

        {/* Title */}
        <h2 className="text-xl font-bold leading-7 mb-4">
          {title}
        </h2>

        {/* News Image */}
        <img
          src={image_url}
          alt={title}
          className="w-full h-52 object-cover rounded-md"
        />

        {/* Details */}
        <div className="mt-5">
          <p className="text-sm text-gray-500 leading-6">
            {details}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tags?.map((tag) => (
              <span
                key={tag}
                className="badge badge-ghost"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Read More */}
          <button className="text-orange-500 font-semibold text-sm mt-2">
            Read More
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between border-t border-base-300 px-4 py-3">

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < rating.number
                  ? "text-orange-400"
                  : "text-gray-300"
              }
              size={15}
            />
          ))}

          <span className="ml-2 text-sm font-medium">
            {rating.number}.0
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye size={16} />
          <span className="text-sm">
            {total_view.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;  