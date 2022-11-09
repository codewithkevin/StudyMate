import { InterestContext } from "./../Context/ProfileContext/InterestContext";
import { useContext } from "react";

export const useInterestContext = () => {
  const context = useContext(InterestContext);

  if (!context) {
    throw Error(
      "useInterestContext must be used inside an useInterestContextProvider"
    );
  }

  return context;
};
