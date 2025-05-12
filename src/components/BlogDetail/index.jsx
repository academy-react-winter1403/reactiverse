import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import News from "../News/News";
import NewsFromSameCategory from "../News/NewsFromSameCategory";
import { getBlogsDetail } from "../../core/services/api/getBlogsDetail";
import { useParams } from "react-router-dom";
import { getNewsFromSameCategory } from "../../core/services/api/getNewsFromSameCtegory";

const BlogDetail = () => {
  const [news, setNews] = useState({});
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getData = async () => {
    const data = await getBlogsDetail(id);
    await getDataFromSameCategory(data.newsCatregoryId);

    setNews(data);
  };
  const getDataFromSameCategory = async (catId) => {
    const apiData = await getNewsFromSameCategory(catId);
    const filtered = apiData.filter((el) => el.id != id);
    setData(filtered);
  };
  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <>
      <News news={news} />
      <NewsFromSameCategory data={data} />
    </>
  );
};

export default BlogDetail;
