import React from "react";
import "./style.css";
import "./dashboard.css";
import Dashboard from "./Components/Dashboard";
import { InfoContext } from "../../Context/AuthContext";

export default function DashboardView(props) {
  const { info } = React.useContext(InfoContext);
  return <Dashboard />;
}
