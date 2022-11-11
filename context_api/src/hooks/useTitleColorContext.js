import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorCOntext = () => {
  const context = useContext(TitleColorContext);

  if (!context) {
  }
  return context;
};
