import React from "react";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Counter from "./counter.jsx";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="container text-center d-flex justify-content-center mt-5">
			<div className="row counterStyle">
				<div className="col">
					<i className="far fa-clock"></i>
				</div>
				<div className="col">
					<Counter time={10000} />
				</div>
				<div className="col">
					<Counter time={1000} />
				</div>
				<div className="col">
					<Counter time={100} />
				</div>
				<div className="col">
					<Counter time={10} />
				</div>
				<div className="col">
					<Counter time={1} />
				</div>
			</div>
		</div>
	);
}
