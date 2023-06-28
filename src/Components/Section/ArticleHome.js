import React from "react";
import "./ArticleHome.css";

const ArticleHome = (props, img) => {
  return (
    <div className="d-block d-md-flex card row flex-row py-4">
      <div className="col col-lg-4">
        <div className="card-body ">
          <div>
            <h5 className="card-title">{props.title}</h5>
            <p
              className="card-text"
              style={{
                maxHeight: "12vh",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
              }}
            >
              {props.abstract}
            </p>
          </div>

          <div className="pt-2">
            {" "}
            <a href={props.url} className="">
              Continua a Leggere
            </a>
          </div>

          <hr></hr>
        </div>
      </div>
      <div className="col col-lg-8">
        {props.img && (
          <img
            src={props.img}
            className="card-img-top"
            alt="..."
            style={{ width: "100%", height: "100%", maxHeight: "500px" }}
          />
        )}
      </div>
    </div>
  );
};

export default ArticleHome;
