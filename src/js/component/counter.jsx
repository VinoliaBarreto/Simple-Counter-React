import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

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
