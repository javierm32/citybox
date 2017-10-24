$(document).foundation()

// Side Nav

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  //document.getElementById("scrollSticky").style.display = "none";
  document.getElementById("container").style.opacity="0.5"
  
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
  //document.getElementById("scrollSticky").style.display = "block";
  document.getElementById("container").style.opacity="1"
  
}


// Google Maps

function myMap() {
  var myCenter = new google.maps.LatLng(24.771474, -107.400529);
  var torreAcademica = new google.maps.LatLng(24.821604, -107.382564);
  var industriasRecio = new google.maps.LatLng(24.710518, -107.384662);
  var preparatoriaZapata = new google.maps.LatLng(24.822047, -107.382080);
  var hospitalCivil = new google.maps.LatLng(24.820147, -107.395753);

  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 12};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  
  var marker1 = new google.maps.Marker({position: torreAcademica});
  marker1.setMap(map);
  var marker2 = new google.maps.Marker({position: industriasRecio});
  marker2.setMap(map);
  var marker3 = new google.maps.Marker({position: preparatoriaZapata});
  marker3.setMap(map);
  var marker4 = new google.maps.Marker({position:  hospitalCivil});
  marker4.setMap(map);
   
  document.getElementById("myBtn1").addEventListener("click", displayLocation1);
  document.getElementById("myBtn2").addEventListener("click", displayLocation2);
  document.getElementById("myBtn3").addEventListener("click", displayLocation3);
  document.getElementById("myBtn4").addEventListener("click", displayLocation4);

  function displayLocation1() {
    var infowindow = new google.maps.InfoWindow({
      content:"Torre Académica - 2 maquinas"
    });
    infowindow.open(map,marker1);
  }

  function displayLocation2() {
    var infowindow = new google.maps.InfoWindow({
      content:"Industrias Recio - 4 maquinas"
    });
    infowindow.open(map,marker2);
  }

  function displayLocation3() {
    var infowindow = new google.maps.InfoWindow({
      content:"Preparatoria Zapata - 1 maquina"
    });
    infowindow.open(map,marker3);
  }

  function displayLocation4() {
    var infowindow = new google.maps.InfoWindow({
      content:"Hospital Civil - 2 maquinas"
    });
    infowindow.open(map,marker4);
  }

  google.maps.event.addListener(marker1,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Torre Académica - 2 maquinas"
    });
  infowindow.open(map,marker1);
  });

  google.maps.event.addListener(marker2,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Industrias Recio - 4 maquinas"
    });
  infowindow.open(map,marker2);
  });

  google.maps.event.addListener(marker3,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Preparatoria Zapata - 1 maquina"
    });
  infowindow.open(map,marker3);
  });

  google.maps.event.addListener(marker4,'click',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Hospital Civil - 2 maquinas"
    });
  infowindow.open(map,marker4);
  });
}