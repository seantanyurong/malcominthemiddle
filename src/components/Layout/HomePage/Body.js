// import fetch from 'node-fetch';

const Body = () => {

  async function getResults() {

    const postal1 = 689672;
    const postal2 = 750472;

    const body = {postal1: postal1, postal2: postal2};

    const response = await fetch('https://jmomnc7recyivbvpkxqnjkzmk40zmura.lambda-url.us-east-1.on.aws/', {
      method: 'post',
      body: JSON.stringify(body),
    });


    const data = await response.json();
    
    console.log(data)


  }

// cd ./package/tmp && zip -r ../lamdba.zip .

  // cp -a ./lamdba/. ./package/tmp/

  // cp -a ./lamdba/env/lib/python3.10/site-packages/. ./package/tmp/



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
      <div className="flex flex-col space-y-6 items-center">
        <progress className="progress w-24"></progress>
        <button className="btn gap-2" onClick={getResults}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Search
        </button>
      </div>
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
