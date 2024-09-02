import React from "react";
import Typewriter from "typewriter-effect";

const Type = ({ labels }) => {
	return (
		<Typewriter
			options={{
				strings: labels,
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
};

export default Type;
