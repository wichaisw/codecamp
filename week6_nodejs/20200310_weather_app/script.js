// $(document).ready(function() {
//   navigator.geolocation.getCurrentPosition(function(position) {  
//     $(".latitude").text(`latidue: ${position.coords.latitude}`);
//     $(".longtitude").text(`longtidue: ${position.coords.longitude}`); 
//   });

// })

$(document).ready(function() {

  function geolocation() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function(position) {  
        resolve(position)
      })
    })
  }

  geolocation()
    .then(location => {
      console.log(location)
    
      let latitude = location.coords.latitude
      let longitude = location.coords.longitude
      
      $('.position').text(`latitude: ${latitude}, longitude: ${longitude}`)
      console.log(latitude)
      console.log(longitude)

      fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5b0669fa2b50528e6e0cd5f1c8d81d45/${latitude},${longitude}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            function toCelcius(fah) {
              return (fah - 32) * 5/9
            } 
            let celciusTemp = toCelcius(data.currently.temperature).toFixed(2)
            $(".temperature").text(`temperature: ${celciusTemp}  fahrenheit`)
            $(".humidity").text(`humidity: ${data.currently.humidity*100}%`)
        }) 

    })

});


