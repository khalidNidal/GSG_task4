import { useState } from "react";
import List from "./components/List.js";
import {ImageSize} from "./components/MyContext"

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <ImageSize.Provider value={imageSize}>
        <List />
      </ImageSize.Provider>
    </>
  );
}
