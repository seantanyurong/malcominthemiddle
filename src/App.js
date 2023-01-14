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
    </Fragment>
  );
}

export default App;
