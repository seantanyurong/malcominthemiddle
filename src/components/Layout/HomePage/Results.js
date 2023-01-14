import React from "react";

const Results = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="divider w-3/4 mx-auto mb-20">
        {props.data ? "Here's your result!" : "Go search for something!"}
      </div>
      {props.data && (
        <div className="card w-3/4 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{props.data[1]}</h2>
            <p>{props.data[2]}</p>
            <div className="card-actions justify-end">
              <a href={props.data[3]} target="_blank" rel="noreferrer">
                <button className="btn btn-primary mt-5">
                  Looks kewl. I wanna learn more.
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
