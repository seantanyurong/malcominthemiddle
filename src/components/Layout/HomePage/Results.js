import React from "react";

const Results = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="divider w-3/4 mx-auto mb-20">
        Go search for something!
      </div>
      <div className="card w-3/4 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Cookies!</h2>
          <p>We are using cookies for no reason.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
