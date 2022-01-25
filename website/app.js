// Personal API Key for OpenWeatherMap API

let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = ",us&appid=e32478fe18ea0e7eab9385983090fb94";

const generate = document.getElementById("generate");
// const content = document.getElementById("content");

// Event listener to add function to existing HTML DOM element

generate.addEventListener("click", performAction);

/* Function called by event listener */
function performAction(e) {
  const zipCode = document.getElementById("zip").value;
  const content = document.getElementById("feelings").value;
  getWeather(apiURL, zipCode, apiKey)
    .then(function (data) {
      console.log(data);
      postData("/addData", {
        temp: convertKelvinToCelsius(data.main.temp),
        date: newDate,
        content: content,
      });
    })
    .then(function () {
      updateUI();
    });
}

/* Function to GET Web API Data*/
const getWeather = async (apiURL, zipCode, apiKey) => {
  const res = await fetch(apiURL + zipCode + apiKey);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

/* Function to POST data */
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      temp: data.temp,
      date: data.date,
      content: data.content,
    }),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log(error);
  }
};

// /* Function to GET Project Data */

const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("zip").innerHTML = allData.zip;
    document.getElementById("temp").innerHTML = allData.temp + "&deg";
    document.getElementById("date").innerHTML = allData.date;
    document.getElementById("content").innerHTML = allData.content;
  } catch (error) {
    console.log("error", error);
  }
};

function convertKelvinToCelsius(kelvin) {
  if (kelvin < 0) {
    return "below absolute zero (0 K)";
  } else {
    return (kelvin - 273.15).toFixed(2);
  }
}
