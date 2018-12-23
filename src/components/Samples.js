import React, { useState, useEffect } from 'react';

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
};

const Samples = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(
    initialLocationState
  );
  let mounted = true;

  useEffect(
    () => {
      document.title = `You have clicked ${count} times`;
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
      navigator.geolocation.getCurrentPosition(handleGeolocation);
      const watchId = navigator.geolocation.watchPosition(handleGeolocation);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        mounted = false;
        navigator.geolocation.clearWatch(watchId);
      };
    },
    [count]
  );

  const handleGeolocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      });
    }
  };

  const handleOnline = () => {
    setStatus(true);
  };
  const handleOffline = () => {
    setStatus(false);
  };

  const handleMouseMove = event => {
    setMousePosition({ x: event.pageX, y: event.pageY });
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };
  return (
    <div
      style={{
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        marginTop: '40px'
      }}
    >
      <h2>Counter</h2>
      <button onClick={incrementCount}>{count}</button>
      <h2>Light Switch</h2>
      <img
        src={
          isOn
            ? 'https://icon.now.sh/highlight/fd0'
            : 'https://icon.now.sh/highlight/aaa'
        }
        style={{
          width: '50px',
          height: '50px'
        }}
        alt="Flashlight"
        onClick={toggleLight}
      />
      <h2>Mouse tracker</h2>
      <div>{JSON.stringify(mousePosition, null, 2)}</div>

      <h2>Network Status</h2>
      <p>
        You are <strong>{status ? 'online' : 'offline'}</strong>
      </p>
      <h2>Geolocation</h2>
      <p>Latitude is: {latitude}</p>
      <p>Longitude is: {longitude}</p>
      <p>Speed is: {speed}</p>
    </div>
  );
};

export default Samples;
