import Instructions from "../components/Instructions";
import Challenge from "../components/Challenge";
import LowInventory from "../components/Pages/lowInventory"
import CandyCorp from "../components/Pages/CandyCorp"
import TheSweetSuite from "./Pages/TheSweetSuite";
import { Routes, Route } from "react-router-dom"
import "../styles.css";

export default function App() {
  return (
    <>

      <Instructions />
      <div className="challenge-container">
        <Challenge />
      </div>
    </>
  );
}
