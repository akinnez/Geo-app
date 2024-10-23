export function getLocation(setLat: any, setLong: any) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((res) => {
			setLat(res.coords.latitude), setLong(res.coords.longitude);
		});
	}
}
