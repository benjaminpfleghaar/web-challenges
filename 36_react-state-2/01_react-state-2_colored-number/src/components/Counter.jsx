import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className="counter">
			<h1>Colored Number</h1>
			<ColoredNumber value={count} />
			<div className="counter__buttons-container">
				<button type="button" onClick={() => setCount(count + 1)} className="counter__button" aria-label="increment count">
					+
				</button>
				<button type="button" onClick={() => setCount(count - 1)} className="counter__button" aria-label="decrement count">
					-
				</button>
			</div>
		</div>
	);
}
