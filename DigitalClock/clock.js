$(document).ready(function()
{

    function displayDate()
    {
          var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

          var currentTime = new Date()  ;

          var date = currentTime.getDay();
          var hours = currentTime.getHours();
          var minutes = currentTime.getMinutes();
          var seconds = currentTime.getSeconds();

          var meridiem = "AM";  
        
          if (hours > 12) 
          {
              hours = hours - 12; 
              meridiem = "PM"; 
          }

          //alert("DateTime: "+hours+":"+minutes+":"+seconds);
          var clockDiv = document.getElementById("digclock");
          clockDiv.innerHTML = days[date]+"\n"+hours + ":" + minutes + ":" + seconds + "  "+meridiem;
    }

    displayDate();

    setInterval(displayDate, 1000);

});