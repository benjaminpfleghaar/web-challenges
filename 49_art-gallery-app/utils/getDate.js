export default function getDate() {
	const currentdate = new Date();
	return currentdate.getDate() + "." + (currentdate.getMonth() + 1) + "." + currentdate.getFullYear() + " - " + currentdate.getHours() + ":" + currentdate.getMinutes();
}
