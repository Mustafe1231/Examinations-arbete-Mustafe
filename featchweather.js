var button = document.getElementById("button")
var inputValue = document.getElementById("inputvalue")
var Name = document.getElementById("name")
var Desc = document.getElementById("desc")
var Temp = document.getElementById("temp")
var Min = document.getElementById("min")
var Max = document.getElementById("max")


var cityname = inputValue


button.addEventListener("click",function () {
    var key = "c7279900868e0b315b7856e01b2ea9c2"
    var cityname = inputValue
    

    
    
    
   
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityname.value + "&appid=" + key + "&units=metric" )
    .then(function(resp) { return resp.json() }) 
     .then(function(data) 
     {
     var NameValue = data["name"];
     var TempValue = data["main"]["temp"];
      var DescValue = data["weather"][0]["description"];
      var MinValue = data["main"]["temp_min"];
      var MaxValue = data["main"]["temp_max"];
      
      Name.innerHTML =  "Väder av " +  NameValue 
      Temp.innerHTML = "Tempratur: " + TempValue + "ºC"
      Desc.innerHTML =  "beskrivning: " + DescValue;
      Min.innerHTML = "Min tempratur: " + MinValue +"ºC"
      Max.innerHTML = "Max tempratur: " + MaxValue +"ºC"
      
       console.log(data);

       


       
     })

     .catch(err => alert("fel stad"))

   } 
)
 
