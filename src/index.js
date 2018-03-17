import React from "react";
import ReactDOM from "react-dom";

const Test = () => <h1>Webpack4 React with Hot-Reload 👍</h1>;

ReactDOM.render(<Test />, document.getElementById("root"));

module.hot.accept();
