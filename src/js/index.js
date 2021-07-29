//import react into the bundle
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Declaracion de props y la funcion que la usara.
const Counter = props => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const intervalo = setInterval(() => {
			if (count != 9) {
				setCount(count + 1);
			} else {
				setCount(0);
			}
		}, 1000 * props.time);

		return () => clearInterval(intervalo);
	}, [count]);

	return <div>{count}</div>;
};

Counter.propTypes = {
	time: PropTypes.number
};

export default Counter;

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
