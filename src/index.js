import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";

ReactDOM.render( // store부분을 index에 연결함
<Provider store={store}> 
<App />
</Provider>, document.getElementById("root"));