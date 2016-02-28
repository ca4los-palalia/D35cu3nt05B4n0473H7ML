//localStorage.clear();


var options = {
  enableHighAccuracy: true
};

function success(pos) {
	console.log("debugger1");
	window.location.href="#openModal" 
	console.log("debugger2");
	var crd = pos.coords;
	writeCookie('addressCurrentLon', crd.longitude, 3);
	writeCookie('addressCurrentLat', crd.latitude, 3);
	//var latlng = new google.maps.LatLng('19.141160', '-98.282079'); //CASA
	//var latlng = new google.maps.LatLng('19.0539392', '-98.224449'); // Oficina
	console.log("debugger");
	var latlng = new google.maps.LatLng(crd.latitude, crd.longitude);
	var geocoder = new google.maps.Geocoder();
  
	geocoder.geocode({'location': latlng}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
		  if (results[1]) {
			var address = results[0].formatted_address.toString();
			writeCookie('addressCurrent', address, 3);
			writeCookie('addressCurrentLon', crd.longitude, 3);
			writeCookie('addressCurrentLat', crd.latitude, 3);
			console.log("Direccion Inicial: " + address + " " + crd.latitude + ", " + crd.longitude + " : " +crd.accuracy);
		  }
		}
	});
  
};

function error(err) {
	
	if (err.core == err.PERMISSION_DENIED) {
        console.warn('El usuario no ha concedido los privilegios de geolocalización');
    } else if (err.core == err.POSITION_UNAVAILABLE) {
        console.warn('Posicion no disponible');
    } else if (err.core == err.TIMEOUT) {
        console.warn('Demasiado tiempo intentando obtener la localización del usuario.');
    } else if (err.core == err.UNKNOWN) {
        console.warn('Error desconocido');
    } else {
        console.warn('Error insesperado');
    }
	
};

navigator.geolocation.getCurrentPosition(success, error, options);

//****************************************************************************






function writeCookie(name,value,days) {
	var date, expires;
	if (days) {
		date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		expires = "; expires=" + date.toGMTString();
			}else{
		expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}


function ShowLogIn(){
	window.location.href="#openModal" 
}
function redirectToMap(){
	var user = document.forms["form1"].elements[0].value;
	var pass = document.forms["form1"].elements[1].value;
	//alert(user + " " + pass)
	window.location.href="#close" 
	window.open('iFrame/mapaGlobal.html','_blank');
}

/*
$.ajax({
 type: 'GET',
 //url: 'http://localhost:9090/DescuentosBanorte/crunchify/api/',
 url: 'https://app-banorte.rhcloud.com/DescuentosBanorte/crunchify/api/',
 
  success: function(json) {
		window.location.href="#close"
		sourceJSONGLobal = json;
		console.log(json);
		localStorage.setItem("username", JSON.stringify(json));
	},
	error: function(e) {
	   console.log(e);
	}
});
*/