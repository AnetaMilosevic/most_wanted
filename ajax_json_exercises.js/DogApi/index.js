
function getRandomDog() {
    $.ajax({
      url: "https://dog.ceo/api/breeds/image/random",
      success: function( result ) {
        $( "#dogo" ).attr("src", result.message);
      }
    });
  }
  
  getRandomDog();

  $("#get-new-dogo").click(getRandomDog)