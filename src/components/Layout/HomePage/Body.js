
// import fetch from 'node-fetch';
import axios from "axios";
import * as yup from "yup";
import { Field, Formik, Form } from "formik";
// import { useState } from "react";

const Body = () => {
  // const [postal1, setPostal1] = useState("");
  // const [postal2, setPostal2] = useState("");

  async function getResults(postal1value, postal2value) {
    console.log("Getting results");

    const postal1 = 689672;
    const postal2 = 750472;

    const body = { postal1: postal1, postal2: postal2 };

    const response = await fetch('https://zheoqm6dkz6tkuc4km4a4vj3om0sgrog.lambda-url.us-east-1.on.aws/', {
      method: 'post',
      body: JSON.stringify(body),
    });

    const data = await response.json();
    
    console.log(data)
    // axios
    //   .post(
    //     `https://zheoqm6dkz6tkuc4km4a4vj3om0sgrog.lambda-url.us-east-1.on.aws/`,
    //     body
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //   });
  }

  const validationSchema = yup.object({
    postal1: yup.number("Enter a zip code").required("Zip code is required"),
    postal2: yup.number("Enter a zip code").required("Zip code is required"),
  });

  return (
    <div className="flex flex justify-center items-center mx-auto space-x-10">
      <Formik
        initialValues={{
          postal1: "",
          postal2: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          getResults(values.postal1, values.postal2);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex justify-center items-center mx-auto space-x-10">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  This one's made especially for you, because you're special
                </h2>
                <p>Type in your zip code below!</p>

                <Field
                  name="postal1"
                  type="number"
                  placeholder="Numbers only please"
                  className="input input-bordered w-full max-w-xs"
                />
                <p
                  className={`text-error text-xs ${
                    errors.postal1 && touched.postal1 ? `visible` : `invisible`
                  }`}
                >
                  {errors.postal1}
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-6 items-center">
              <progress className="progress w-24"></progress>
              <button className="btn gap-2" type="submit">
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
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  And this one's for your friend or soon-to-be friend
                </h2>
                <p>Type in your friend's zip code below!</p>
                <Field
                  name="postal2"
                  type="number"
                  placeholder="You know the drill"
                  className="input input-bordered w-full max-w-xs"
                />
                <p
                  className={`text-error text-xs ${
                    errors.postal2 && touched.postal2 ? `visible` : `invisible`
                  }`}
                >
                  {errors.postal2}
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      {/* First box */}

      {/* Second box */}
    </div>
  );
};

export default Body;
