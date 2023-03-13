// "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
// "https://api.github.com/search/repositories?q=user:AnetaMilosevic"

const getShows = () => {
  $.ajax({
    url: `http://api.tvmaze.com/shows`,
    success: function (shows) {
      console.log(shows);
      for (var i = 0; i < 50; i++) {
        $("#show-wrapper").append(
          `
              <a href="./show_info_page/show_info_page.html?show_id=${shows[i].id}">
              <div id='card'>
              <img src=${shows[i].image.medium} />
              <p>${shows[i].name}</p>
              </div>
              </a>
              `
        );
      }
    },
  });
};
getShows();
