import "./Tab.css";

export default function Tab({ onClick, children, isActive }) {
	return (
		<button className={`tab${isActive ? " tab--active" : ""}`} onClick={onClick}>
			{children}
		</button>
	);
}
