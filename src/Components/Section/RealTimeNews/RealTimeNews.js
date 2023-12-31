import React from "react";

const RealTimeNews = (props, img) => {
  return (
    <div className="card row justify-content-center py-4">
      <p className="text-center"> LIVE </p>

      <div className="col">
        {props.img && (
          <a href={props.url} className="">
            <img
              src={props.img}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", height: "100%", maxHeight: "500px" }}
            />{" "}
          </a>
        )}
      </div>

      <div className="col">
        <div className="card-body ">
          <h5 className="card-title">
            {" "}
            <a href={props.url} className="">
              {props.title}{" "}
            </a>
          </h5>
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
          <a href={props.url} className="">
            Continua a Leggere
          </a>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default RealTimeNews;
