# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Purpose](#purpose)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned and Challenges I faced](#what-i-learned-and-Challenges-I-faced)


## Overview

### Purpose
This is my first react application. The purpose of this project is to implement everything I have learned so far in practice. These are what I have learned so far:

  - React Components
  - Hooks (UseState and UseEffect)
  - Fetching data from API (JSON format)
  - Using third party module

### Links

- Solution URL: [IP Address Tracker](https://github.com/charo-jp/IP-Address-Tracker)
- Live Site URL: [Add live site URL here](https://lucid-jennings-7c30a8.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library


### What I learned and Challenges I faced

- The difficult part is to fetch nested JSON data. At first I set location and tried to access nested data but it did not work. The solution is simply to extract data I need in useEffect and set it to location so that later I have an access to the data.

  ```JS
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
        `https://geo.ipify.org/api/v2/country,city?apiKey=YOUR_API_KEY=${ip}`
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
  }, [ip, isValid]);
  ```

- Although it is not good practice to paste API key as it is on the frontend on actual project. In MERN stack, I should keep these variables on backend to prevent others from stealing.

- Sending data from child component to parent component was involved a little difficulity. I just need to pass the function to the child component and inside the component, pass the data as an argument.

- Throughout this project I realized how important file management is. I got confused during the development of where I wrote my code. In the next project, I would like to make a plan before coding.

I feel like there are many improvements that I can do but as I am new to React I can not find these by myself. Feel free and do not hesitate to mention some fixations and codes can be better!
