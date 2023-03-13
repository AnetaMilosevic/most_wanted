const getJoke = () => {
  try {
    fetch("https://api.chucknorris.io/jokes/random", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        $("#jokePlaceholder").empty();
        $("#jokePlaceholder").append(
          `
              
                 <p>${data.value}</p>
               `
        );
      });
  } catch (error) {
    console.log(error);
  }
};

getJoke();

$("#button").click(function () {
  getJoke();
});
