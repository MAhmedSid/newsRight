import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Newitem from "./Newitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState("first");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(40);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(70);
    let parsedData = await data.json();
    props.setProgress(100);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - Right News`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pagesize}`;
    setLoading(true);
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(totalResults + parsedData.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center " style={{ marginTop: "100px" }}>
        Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading === "first" ? <Spinner /> : ""}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <>
                  <div className="col-md-4 mt-5" key={element.url}>
                    <Newitem
                      title={
                        element.title === undefined || null
                          ? "Unknown"
                          : element.title.slice(0, 83)
                      }
                      desc={
                        element.description
                          ? element.description.slice(0, 110)
                          : ""
                      }
                      imgUrl={element.urlToImage}
                      url={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                      s
                      category={props.category}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {loading === true ? <Spinner /> : ""}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 6,
  category: "technology",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
