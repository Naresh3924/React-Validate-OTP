import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Count_indput_box = 5;
function App() {
  const [indexarr, setindexarr] = useState(
    new Array(Count_indput_box).fill("")
  );

  const refarr = useRef([]);

  useEffect(() => {
    refarr.current[0]?.focus();
  }, []);

  const handlechange = (value, index) => {
    if (isNaN(value)) return;

    const newArray = [...indexarr];
    newArray[index] = value.slice(-1);
    setindexarr(newArray);

    if (value && index < Count_indput_box - 1) {
      refarr.current[index + 1]?.focus();
    }
  };

  const handlekey = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      if (index > 0) {
        refarr.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="body">
      <h1 className="title">Validate OTP</h1>
      {indexarr.map((input, index) => (
        <input
          key={index}
          className="inputbox"
          type="tel"
          value={indexarr[index]}
          ref={(input) => (refarr.current[index] = input)}
          onKeyDown={(e) => handlekey(e, index)}
          onChange={(e) => handlechange(e.target.value, index)}
        />
      ))}
    </div>
  );
}

export default App;
