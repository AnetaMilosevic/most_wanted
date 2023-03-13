// "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
// "https://api.github.com/search/repositories?q=user:AnetaMilosevic"
function getUsers(query) {
    $.ajax({
      url: `https://api.github.com/search/users?q=${query}`,
      success: function( result ) {
        console.log(result)
        var users = result.items
        for(var i = 0; i < users.length; i++) {
           $( "#users-wrapper" ).append(
            `
            <a href="./githubRepos/index.html?name=${users[i].login}">
                <div id='card'>
                    <p>${users[i].login}</p>
                    <img src=${users[i].avatar_url} />
                </div>
            </a>
           `
           )
        } 
      }
    });
  }

  $(document).keypress(function(e) {
      var inputValue = $("input").val()
    if(e.key === 'Enter' && inputValue) {
       getUsers(inputValue)
    }
  })

  