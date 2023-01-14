// import fetch from 'node-fetch';
import * as yup from "yup";
import Stats from "./Stats";
import Results from "./Results";
import { Field, Formik, Form } from "formik";
import { useState } from "react";

const Body = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);

  async function getResults(postal1value, postal2value) {
    console.log("Getting results");
    setLoad(true);

    const body = { postal1: postal1value, postal2: postal2value };

    const response = await fetch(
      "https://zheoqm6dkz6tkuc4km4a4vj3om0sgrog.lambda-url.us-east-1.on.aws/",
      {
        method: "post",
        body: JSON.stringify(body),
      }
    );

    const newData = await response.json();
    setLoad(false);

    console.log(newData);
    setData(newData);
  }

  const validationSchema = yup.object({
    postal1: yup.number("Enter a zip code").required("Zip code is required"),
    postal2: yup.number("Enter a zip code").required("Zip code is required"),
  });

  return (
    <div>
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
            <div className="card w-96 bg-base-100 shadow-xl min-h-[230px]">
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
              <button
                className={`btn gap-2 ${load && "loading"}`}
                type="submit"
              >
                {!load && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                )}
                Search
              </button>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl min-h-[230px]">
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
      <Stats />
      <Results data={data} />
    </div>
  );
};

export default Body;
