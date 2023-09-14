import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import Food, { FavDrink, FavDessert, FavFruit } from "./Food.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Food />
		<FavDrink />
		<div>
			{" "}
			<h1>{FavDessert}</h1>
		</div>
		<div>
			<li>
				<FavFruit />
			</li>
		</div>
	</React.StrictMode>
);
