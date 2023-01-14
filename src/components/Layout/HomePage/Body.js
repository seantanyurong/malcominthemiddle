const Body = () => {
  return (
    <div className="flex flex justify-center items-center mx-auto space-x-10">
      {/* First box */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            This one's made especially for you, because you're special
          </h2>
          <p>Type in your zip code below!</p>
          <input
            type="number"
            placeholder="Numbers only please"
            className="input input-bordered w-full max-w-xs"
          />

          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
      <progress className="progress w-24"></progress>
      {/* Second box */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            And this one's for your friend or soon-to-be friend
          </h2>
          <p>Type in your friend's zip code below!</p>
          <input
            type="number"
            placeholder="You know the drill"
            className="input input-bordered w-full max-w-xs"
          />

          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
