import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState();
  //   console.log(id, data);
  useEffect(() => {
    const filteredNews = data.filter((news) => news.category_id == id);
    console.log(filteredNews);
  }, [data, id]);

  return <div>categoryNews - {id}</div>;
};

export default CategoryNews;
