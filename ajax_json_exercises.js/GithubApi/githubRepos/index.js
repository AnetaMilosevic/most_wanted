function getRepos() {

    const paramString = new URL(window.location.href).search
    const userName = paramString.split('=')[1]

    $.ajax({
      url: `https://api.github.com/search/repositories?q=user:${userName}`,
      success: function( result ) {
        console.log(result)
        var repos = result.items
        for(var i = 0; i < repos.length; i++) {
           $( "#repos-wrapper" ).append(
            `
                 <div id='card'>
                    <p>${repos[i].name}</p>
                    <p>${repos[i].stargazers_count}</p>
                    <p>${repos[i].description ? repos[i].description : ""}</p>
                </div>
           `
           )
        }   
      }
    });
  }

  getRepos()