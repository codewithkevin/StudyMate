import { useContext } from "react";
import { DetailsContext } from './../Context/ProfileContext/DetailsContext';

export const useDetailsContext = () => {
  const context = useContext(DetailsContext);

  if (!context) {
    throw Error(
      "useInterestContext must be used inside an useInterestContextProvider"
    );
  }

  return context;
};
