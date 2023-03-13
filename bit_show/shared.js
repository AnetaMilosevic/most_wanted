function search(query) {
  $.ajax({
    url: `https://api.tvmaze.com/search/shows?q=${query}`,
    success: function (searchResults) {
      $("#input-result").empty();
      for (var i = 0; i < searchResults.length; i++) {
        $("#input-result").append(
          `
              <li>${searchResults[i].show.name}</li>
            `
        );
      }
    },
  });
}

$("#input").on("input", function (e) {
  search(e.target.value);
});
