import "./Count.css";

export default function Count(prop) {
	return (
		<div className="counter--count">
			<h1>{prop.number}</h1>
		</div>
	);
}

