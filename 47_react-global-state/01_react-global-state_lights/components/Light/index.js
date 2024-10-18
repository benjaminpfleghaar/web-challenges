import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ id, name, onToggleLight }) {
	const [isOn, setIsOn] = useState(false);

	function handleToggle() {
		setIsOn((isOn) => !isOn);
		onToggleLight(id);
	}

	return (
		<LightButton
			type="button"
			onClick={() => {
				handleToggle();
			}}
			$isOn={isOn}>
			<Icon $isOn={isOn}>💡</Icon>
			<Text>
				<Name>{name}</Name>
				<State>{isOn ? "On" : "Off"}</State>
			</Text>
		</LightButton>
	);
}
