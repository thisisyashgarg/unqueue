import { useState } from "react";

const [lat, setLat] = useState(null);
const [lon, setLon] = useState(null);
const [address, setAddress] = useState("");

navigator.geolocation.getCurrentPosition((position) => {
  setLat(position.coords.latitude);
  setLon(position.coords.longitude);
});

export function cityName() {
  if (lat && lon) {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
    )
      .then((response) => response.json())
      .then((data) => {
        const city =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          data.address.hamlet;
        setAddress(city);
        return console.log(address);
      })
      .catch((error) => console.log(error));
  }
}
