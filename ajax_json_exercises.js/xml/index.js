function getUser() {
    fetch("http://www.geoplugin.net/xml.gp")
      .then(response => response.text())
      .then(string => new window.DOMParser().parseFromString(string, "text/xml"))
      .then(document => document.querySelector("geoplugin_countryName").textContent)
      .then(countryName => console.log(countryName));
}

getUser();