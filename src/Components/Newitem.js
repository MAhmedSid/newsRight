import React from "react";
import img from "./unknown.jpg";

const Newitem = (props) => {
  let { title, imgUrl, url, desc, date, author, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          className="position-absolute d-flex  "
          style={{ justifyContent: "flex-end", right: "0" }}
        >
          <span className={`badge rounded-pill bg-danger`}>{source}</span>
        </div>
        <img
          src={imgUrl === null ? img : imgUrl}
          className="card-img-top"
          alt="thumb-nail"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"}
              {new Date(date).toUTCString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={url}
            target="_blank"
            className="btn btn-sm  btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newitem;
