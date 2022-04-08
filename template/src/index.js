import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "antd/dist/antd.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require("./animations/loading.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="min-w-full min-h-screen flex justify-center items-center align-middle">
          <Lottie options={defaultOptions} height={"15%"} width={"15%"} />{" "}
        </div>
      }
    >
      <App />
    </Suspense>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
