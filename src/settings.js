import { createContext, useState } from "react";

export const SettingsContext = createContext({});

export const StateProvider = ({ children }) => {
  const [color, setColor] = useState("#dee4fd");
  const [snowflakeCount, setSnowflakeCount] = useState(200);
  const [radius, setRadius] = useState[(0.5, 3.0)];
  const [speed, setSpeed] = useState[(0.5, 3.0)];
  const [wind, setWind] = useState[(-0.5, 2.0)];

  return (
    <SettingsContext.Provider
      value={{
        color,
        setColor,
        snowflakeCount,
        setSnowflakeCount,
        radius,
        setRadius,
        wind,
        setWind,
        speed,
        setSpeed,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
