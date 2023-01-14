const Body = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <h1 className="text-2xl">Woah</h1>
      <p className="text-xl">Why arent you working</p>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <button class="btn btn-primary">Button</button>
      <button class="btn w-64 rounded-full">Button</button>
    </div>
  );
};

export default Body;
