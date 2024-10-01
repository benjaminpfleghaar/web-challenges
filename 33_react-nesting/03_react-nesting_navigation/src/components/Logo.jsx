import Image from "./Image";
import logo from "./../img/avatar.jpg";

export default function Logo() {
	return (
		<a href="#">
			<Image src={logo} alt="logo" />
		</a>
	);
}
