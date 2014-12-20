$(document).ready(function()
{

    function displayDate()
    {
          var currentTime = new Date()  ;
          var hours = currentTime.getHours();
          var minutes = currentTime.getMinutes();
          var seconds = currentTime.getSeconds();

          //alert("DateTime: "+hours+":"+minutes+":"+seconds);
          var clockDiv = document.getElementById("digclock");
          clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds;
    }

    displayDate();


});