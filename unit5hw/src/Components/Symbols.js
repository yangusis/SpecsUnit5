import react from "react";

import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
  const currentDisplay = useSelector(selectDisplay);

  return (
    <div className="symbols">
      <div className="stack">
        {currentDisplay.flags ? (
          <img src={currentDisplay.flags.png} />
        ) : (
          "(No Data Found)"
        )}
      </div>
      <div className="stack">
        {currentDisplay.coatOfArms ? (
          <img src={currentDisplay.coatOfArms.png} />
        ) : (
          "(No Data Found)"
        )}
      </div>
    </div>
  );
};

export default Symbols;
