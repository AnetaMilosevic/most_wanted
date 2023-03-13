function getInfo() {
  const paramString = new URL(window.location.href).search;
  const show_id = paramString.split("=")[1];
  console.log(paramString);
  $.ajax({
    url: `http://api.tvmaze.com/shows/${show_id}`,
    success: function (show) {
      $("#title-wrapper").append(`<h2>${show.name}</h2>`);
      $("#description-wrapper").append(`<p>${show.summary}</p>`);
      $("#image-wrapper").append(
        `
              <div>
                <img src=${show.image.original} />
              </div>
           `
      );
    },
  });
}

getInfo();

function getSeasonsInfo() {
  const paramString = new URL(window.location.href).search;
  const show_id = paramString.split("=")[1];
  console.log(paramString);
  $.ajax({
    url: `https://api.tvmaze.com/shows/${show_id}/seasons`,
    success: function (seasons) {
      $("#dates").append(`<h4>Seasons (${seasons.length})<h4>`);
      for (var i = 0; i < seasons.length; i++) {
        $("#dates").append(
          `
            <li>${seasons[i].endDate} - ${seasons[i].premiereDate}</li>
          `
        );
      }
    },
  });
}

getSeasonsInfo();

function getCastInfo() {
  const paramString = new URL(window.location.href).search;
  const show_id = paramString.split("=")[1];
  console.log(paramString);
  $.ajax({
    url: `https://api.tvmaze.com/shows/${show_id}/cast`,
    success: function (result) {
      // console.log(result);
      var cast = result;
      $("#cast").append("<h4>Cast</h4>");
      for (var i = 0; i < cast.length; i++) {
        $("#cast").append(
          `
            <li>${cast[i].person.name}</li>
          `
        );
      }
    },
  });
}

getCastInfo();
