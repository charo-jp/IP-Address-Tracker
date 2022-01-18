import React, { useEffect, useState } from "react";
import ipRegex from "ip-regex";

import Title from "../components/Title";
import Input from "../components/Input";
import Location from "../components/Location";
import Map from "../components/Map";

import "./IPAddress.css";

const IPAddress = () => {
  const [ip, setIP] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [placeholder, setPlaceholder] = useState({
    text: "Search for any IP address",
    cname: "",
  });
  const [location, setLocation] = useState({});
  const [center, setCenter] = useState({});

  useEffect(() => {
    if (isValid || ip === "") {
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_drORKwWlYLVEZZyuegaiPNR22mXrF&ipAddress=${ip}`
      )
        .then((res) => res.json())
        .then((json) => {
          setLocation({
            ip: json.ip,
            city: json.location.city,
            timezone: json.location.timezone,
            isp: json.isp,
          });
          setCenter({
            lat: Number(json.location.lat),
            lng: Number(json.location.lng),
          });
        });
    }
  }, [ip]);

  const setIPAddress = (ipAddress) => {
    if (ipRegex().test(ipAddress) || ipAddress === "") {
      setIP(ipAddress);
      setIsValid(true);
      setPlaceholder( {text: "Search for any IP address", cname: "" });
    } else {
      setIsValid(false);
      setPlaceholder({text: "Invalid IP address!", cname: "red"});
    }
  };

  return (
    <>
      <div className="upper-display">
        <Title />
        <Input
          setIPAddress={setIPAddress}
          placeholder={placeholder}
        />
        <Location location={location} />
      </div>
      <div className="lower-display">
        <Map center={center} lat={location.lat} lng={location.lng} />
      </div>
    </>
  );
};

export default IPAddress;
