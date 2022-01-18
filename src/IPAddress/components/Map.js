import React, {useEffect, useRef} from "react";

import "./Map.css";

const Map = props => {
  const mapRef = useRef();
  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: props.center,
      zoom: 16
    });

    new window.google.maps.Marker({
      position: props.center,
      map: map
    });

  }, [props.center]);

  return (
    <div className = "map" ref = {mapRef}></div>
  )
}

export default Map