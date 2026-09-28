import React from "react";
import {  useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(id, data);

  return <div>categoryNews - {id}</div>;
};

export default CategoryNews;
