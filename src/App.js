import { Fragment } from "react";
import { useContext } from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Snowfall from "react-snowfall";
import { SettingsContext } from "./settings";

function App() {
  const settings = useContext(SettingsContext);

  return (
    <Fragment>
      <main>
        <Snowfall
          color={settings.color}
          snowflakeCount={settings.snowflakeCount}
          radius={settings.radius}
          speed={settings.speed}
          wind={settings.wind}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <a href="https://eelslap.com/" target="_blank" rel="noreferrer">
        <p className="text-gray-300 fixed bottom-4 right-4">snow is cool.</p>
      </a>
    </Fragment>
  );
}

export default App;
