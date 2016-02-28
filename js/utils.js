//var urlWebServiceLocal = 'https://app-banorte.rhcloud.com/DescuentosBanorte/crunchify/api/1';
var urlWebServiceLocal = 'http://localhost:9090/DescuentosBanorte/crunchify/api/1';
//var urlUpdate = 'https://app-banorte.rhcloud.com/DescuentosBanorte/crunchify/api/';
var urlUpdate = 'http://localhost:9090/DescuentosBanorte/crunchify/api/';
var datosWebService = {};
var JSONSourceData = 'JSONSource.JSON';
var JSONSourceEstados = '../js/estados.JSON';
var programaIDGlobal = 0;
var categoriaIDGlobal = 0;
var promocionIDGlobal = 0;
var addressGLobal = null;
var longitudLocal = 0;
var latitudLocal = 0;
var latMapDetails = 0;
var lonMapDetails = 0;
var radioDeBusqueda = 1500;
var sourceJSONGLobal = new Object();
var programas;
var categorias;
var categoriaSelected;
var promociones;
var updateActivated = false;

var navigationBack;
var estadosMineria = [];
var estadoLocal;

var promocionEnMapa;
var failNavigation;	

var objetoLocalicacionIP = new Object();





		
function buscarCoincidencias(word){
	
	var estado = new Object();
	var informacionAddress = word.split(",");
	if(informacionAddress.length > 0){
		word = informacionAddress[2];
		if(word.indexOf("Ags") > -1){
			estado = getEstadoByName("AGUASCALIENTES");
		}else if(word.indexOf("Ags.") > -1){
			estado = getEstadoByName("AGUASCALIENTES");
		}
		else if(word.indexOf("Baja California") > -1){
			estado = getEstadoByName("BAJA CALIFORNIA");
		}
		else if(word.indexOf("B.C.") > -1){
			estado = getEstadoByName("BAJA CALIFORNIA");
		}
		else if(word.indexOf("Baja California Sur") > -1){
			estado = getEstadoByName("BAJA CALIFORNIA SUR");
		}
		else if(word.indexOf("B.C.S.") > -1){
			estado = getEstadoByName("BAJA CALIFORNIA SUR");
		}	
		else if(word.indexOf("Camp") > -1){
			estado = getEstadoByName("CAMPECHE");
		}
		else if(word.indexOf("Camp.") > -1){
			estado = getEstadoByName("CAMPECHE");
		}
		else if(word.indexOf("Coah.") > -1){
			estado = getEstadoByName("COAHUILA DE ZARAGOZA");
		}
		else if(word.indexOf("Coahuila de Zaragoza") > -1){
			estado = getEstadoByName("COAHUILA DE ZARAGOZA");
		}
		else if(word.indexOf("Col.") > -1){
			estado = getEstadoByName("COLIMA");
		}
		else if(word.indexOf("Colima") > -1){
			estado = getEstadoByName("COLIMA");
		}
		else if(word.indexOf("Chiapas") > -1){
			estado = getEstadoByName("CHIAPAS");
		}
		else if(word.indexOf("Chis.") > -1){
			estado = getEstadoByName("CHIAPAS");
		}	
		else if(word.indexOf("Chih.") > -1){
			estado = getEstadoByName("CHIHUAHUA");
		}
		else if(word.indexOf("D.F.") > -1){
			estado = getEstadoByName("DISTRITO FEDERAL");
		}
		else if(word.indexOf("Federal District") > -1){
			estado = getEstadoByName("DISTRITO FEDERAL");
		}
		else if(word.indexOf("Mexico") > -1){
			estado = getEstadoByName("DISTRITO FEDERAL");
		}
		else if(word.indexOf("Dgo.") > -1){
			estado = getEstadoByName("DURANGO");
		}
		else if(word.indexOf("Durango") > -1){
			estado = getEstadoByName("DURANGO");
		}
		else if(word.indexOf("Guanajuato") > -1){
			estado = getEstadoByName("GUANAJUATO");
		}
		else if(word.indexOf("Gto.") > -1){
			estado = getEstadoByName("GUANAJUATO");
		}	
		else if(word.indexOf("Guerrero") > -1){
			estado = getEstadoByName("GUERRERO");
		}
		else if(word.indexOf("Gro.") > -1){
			estado = getEstadoByName("GUERRERO");
		}
		else if(word.indexOf("Hgo.") > -1){
			estado = getEstadoByName("HIDALGO");
		}	
		else if(word.indexOf("Jalisco") > -1){
			estado = getEstadoByName("JALISCO");
		}
		else if(word.indexOf("Jal.") > -1){
			estado = getEstadoByName("JALISCO");
		}
		else if(word.indexOf("Estado de México") > -1){
			estado = getEstadoByName("MEXICO");
		}
		else if(word.indexOf("Méx.") > -1){
			estado = getEstadoByName("MEXICO");
		}
		else if(word.indexOf("State of Mexico") > -1){
			estado = getEstadoByName("MEXICO");
		}
		else if(word.indexOf("Michoacán") > -1){
			estado = getEstadoByName("MICHOACAN DE OCAMPO");
		}
		else if(word.indexOf("Mich.") > -1){
			estado = getEstadoByName("MICHOACAN DE OCAMPO");
		}
		else if(word.indexOf("Morelos") > -1){
			estado = getEstadoByName("MORELOS");
		}
		else if(word.indexOf("Mor.") > -1){
			estado = getEstadoByName("MORELOS");
		}
		else if(word.indexOf("Nayarit") > -1){
			estado = getEstadoByName("NAYARIT");
		}
		else if(word.indexOf("Nay.") > -1){
			estado = getEstadoByName("NAYARIT");
		}	
		else if(word.indexOf("N.L.") > -1){
			estado = getEstadoByName("NUEVO LEON");
		}
		else if(word.indexOf("San Nicolás de los Garza") > -1){
			estado = getEstadoByName("NUEVO LEON");
		}
		else if(word.indexOf("Oax.") > -1){
			estado = getEstadoByName("OAXACA");
		}
		else if(word.indexOf("Oaxaca") > -1){
			estado = getEstadoByName("OAXACA");
		}
		else if(word.indexOf("Pue.") > -1){
			estado = getEstadoByName("PUEBLA");
		}
		else if(word.indexOf("Puebla") > -1){
			estado = getEstadoByName("PUEBLA");
		}
		else if(word.indexOf("Qro.") > -1){
			estado = getEstadoByName("QUERETARO");
		}
		else if(word.indexOf("Querétaro") > -1){
			estado = getEstadoByName("QUERETARO");
		}
		else if(word.indexOf("Quintana Roo") > -1){
			estado = getEstadoByName("QUINTANA ROO");
		}
		else if(word.indexOf("Q.R.") > -1){
			estado = getEstadoByName("QUINTANA ROO");
		}
		else if(word.indexOf("S.L.P.") > -1){
			estado = getEstadoByName("SAN LUIS POTOSI");
		}
		else if(word.indexOf("Sin.") > -1){
			estado = getEstadoByName("SINALOA");
		}
		else if(word.indexOf("Sinaloa") > -1){
			estado = getEstadoByName("SINALOA");
		}
		else if(word.indexOf("Son.") > -1){
			estado = getEstadoByName("SONORA");
		}
		else if(word.indexOf("Sonora") > -1){
			estado = getEstadoByName("SONORA");
		}
		else if(word.indexOf("Tab.") > -1){
			estado = getEstadoByName("TABASCO");
		}
		else if(word.indexOf("Tabasco") > -1){
			estado = getEstadoByName("TABASCO");
		}
		else if(word.indexOf("Tamaulipas") > -1){
			estado = getEstadoByName("TAMAULIPAS");
		}
		else if(word.indexOf("Tamps.") > -1){
			estado = getEstadoByName("TAMAULIPAS");
		}
		else if(word.indexOf("Tlax.") > -1){
			estado = getEstadoByName("TLAXCALA");
		}
		else if(word.indexOf("Veracruz") > -1){
			estado = getEstadoByName("VERACRUZ DE IGNACIO DE LA LLAVE");
		}
		else if(word.indexOf("Ver.") > -1){
			estado = getEstadoByName("VERACRUZ DE IGNACIO DE LA LLAVE");
		}
		else if(word.indexOf("Yucatán") > -1){
			estado = getEstadoByName("YUCATAN");
		}
		else if(word.indexOf("Yuc.") > -1){
			estado = getEstadoByName("YUCATAN");
		}
		else if(word.indexOf("Zac.") > -1){
			estado = getEstadoByName("ZACATECAS");
		}
		else if(word.indexOf("Zacatecas") > -1){
			estado = getEstadoByName("ZACATECAS");
		}
	}
	return estado;
}

function getEstadoByName(name){
	var estadoTemp = [];
	var estadoTemp = [];
	var estadoItem = new Object();
	$.each(estadosMineria, function(index, val) {
		estadoTemp = val;
		$.each(estadoTemp, function(index2, val2) {
			if(val2.nombre == name){
				estadoItem = val2;
			}
		})
	})
	return estadoItem;
}

function readCookie(name) {
	var i, c, ca, nameEQ = name + "=";
	ca = document.cookie.split(';');
	for(i=0;i < ca.length;i++) {
		c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1,c.length);
		}
		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}
	return '';
}

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


function getPromocionesByCategoria(){
	var promocionesTemp = [];
	var casoEspecial1 = false;
	if(programaIDGlobal.toString() === '5'){
		casoEspecial1 = true;
	}
	var i = 0;
	$.each(promociones, function(index, val) {
		if(val.cat_id.toString() === categoriaIDGlobal){
			if(casoEspecial1 == true){
				var objetoPromocion = new Object();
				objetoPromocion = crearPromocionObjetoDistancia(val, i, '', val["ubicacion"]);
				promocionesTemp.push(objetoPromocion);
				i ++;
			}else{
				
				var coordenadasTemp = [];
				coordenadasTemp = val["ubicacion"];
				
				$.each(coordenadasTemp, function(index2, val2) {
					var distancia = calculaDistancia(latitudLocal, longitudLocal, val2.lat, val2.lon);
					console.log(distancia);
					if(distancia < radioDeBusqueda){
						var objetoPromocion = new Object();
						objetoPromocion = crearPromocionObjetoDistancia(val, i, distancia, val2);
						promocionesTemp.push(objetoPromocion);
					}
					i ++;
					/*
					var distancia = calculaDistancia(latitudLocal, longitudLocal, val2.lat, val2.lon);
					
					if(distancia < radioDeBusqueda){
						val.url = distancia;
						promocionesTemp.push(val);
					}*/
					
				})
			}
		}
	})
	return promocionesTemp;
}


function getTodasLasPromociones(){
	console.log("obteniendo todas las promociones de: "+ programaIDGlobal);
	var catgegoriasTemp = [];
	$.each(categorias, function(index, val) {
		if(val.program_id != null){
				if(val.program_id.toString() === programaIDGlobal){
					catgegoriasTemp.push(val);
			}
		}
	})
	var promocionesTemp = [];
	var casoEspecial1 = false;
	if(programaIDGlobal.toString() === '5'){
		casoEspecial1 = true;
	}
	
	var i = 0;
	$.each(catgegoriasTemp, function(index1, val1) {
		$.each(promociones, function(index2, val2) {
			if(val1.id  === val2.cat_id){
				var idPromocion = val2.id;
				if(casoEspecial1 == true){
					var objetoPromocion = new Object();
					objetoPromocion = crearPromocionObjetoDistancia(val2, i, '', val2["ubicacion"]);
					promocionesTemp.push(objetoPromocion);
					i ++;
				}else{
					var coordenadasTemp = [];
					coordenadasTemp = val2["ubicacion"];
					$.each(coordenadasTemp, function(index3, val3) {
						var distancia = calculaDistancia(latitudLocal, longitudLocal, val3.lat, val3.lon);
						if(failNavigation == "true"){
							if(distancia < radioDeBusqueda){
								var objetoPromocion = new Object();
								objetoPromocion = crearPromocionObjetoDistancia(val2, i, distancia, val3)
								promocionesTemp.push(objetoPromocion);
							}
							i ++;
						}else{
							var objetoPromocion = new Object();
							objetoPromocion = crearPromocionObjetoDistancia(val2, i, distancia, val3)
							promocionesTemp.push(objetoPromocion);
							i++;
						}
						
					})
				}
			}
		})
	})
	
	return promocionesTemp;
}

function getTodasLasPromocionesMujerBanorte(subCatProg){
	var catgegoriasTemp = [];
	$.each(categorias, function(index, val) {
		if(val.program_id != null){
			if(val.program_id.toString() === subCatProg){
				catgegoriasTemp.push(val);
			}
		}
	})
	var promocionesTemp = [];
	var i = 0;
	$.each(catgegoriasTemp, function(index1, val1) {
		$.each(promociones, function(index2, val2) {
			if(val1.id  === val2.cat_id){
				var coordenadasTemp = [];
				coordenadasTemp = val2["ubicacion"];
				$.each(coordenadasTemp, function(index3, val3) {
					var distancia = calculaDistancia(latitudLocal, longitudLocal, val3.lat, val3.lon);
					if(distancia < radioDeBusqueda){
						var objetoPromocion = new Object();
						objetoPromocion = crearPromocionObjetoDistancia(val2, i, distancia, val3)
						promocionesTemp.push(objetoPromocion);
					}
					i ++;
				})
			}
		})
	})
	console.log(promocionesTemp)
	return promocionesTemp;
}

function getCategoriasEspecialidades(){
	var programaTemp = [];
	//programaTemp.push(createCategoriaVerTodos());
	$.each(programas, function(index, val) {
		if(val.id === 3){
			val.top_ad = "DataSubCat.html";
			programaTemp.push(val);
		}
		if(val.id === 2){
			val.top_ad = "DataSubCat.html";
			programaTemp.push(val);
		}
	})
	return programaTemp;
}

function getCategoriasMujerBanorte(){
	var categoriasTemp = [];
	$.each(categorias, function(index, val) {
		if(val.program_id === 11){
			if(val.id === 133){//Caso especial NOVIA BANORTE
				val.id = 1;
				val.top_ad = "DataSubCat.html";
				categoriasTemp.push(val);
				return true;
			}	
		}
	})
	categoriasTemp.push(createCategoriaMamaBanorte());//Caso especial
	return categoriasTemp;
}

function getCategoria(){
	var categoriaTemp = new Object();
	$.each(categorias, function(index, val) {
		if(val.id.toString() === categoriaIDGlobal){
			categoriaTemp = val;
		}
	})
	return categoriaTemp;
}

function getCoordenadas(coordenadasTemp, estadosMineria, estado){
	var aceptar = 0;
	var estadoTemp = new Object();
	$.each(coordenadasTemp, function(index, val) {
		var array2 = [];
		array2 = val;
		/*console.log("DIRECCIONES " + index);
		console.log(val.lat);*/
		//$.each(array2, function(index2, val2) {
			getAddressCoordenada(val.lat, val.lon);
			estadoTemp = buscarCoincidencias(localStorage.getItem("addressTemp"), estadosMineria);
			if(estado.clave == estadoTemp.clave)
				aceptar = 1;
		//})
	})	
	return aceptar;
}

//******************** GEOLOCALIZACION ************************************************
function geolocalizacion(){
	var options = {
		enableHighAccuracy: true,
		timeout:10000,
	};
	
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(success, error, options);
		
	}else{
		alert('El navegador no es compatible para la geolocalización, se recomienda usar chrome o firefox para mejor desempeño');
	}

	
	
}

function success(pos) {
	var crd = pos.coords;
	writeCookie('addressCurrentLon', crd.longitude, 3);
	writeCookie('addressCurrentLat', crd.latitude, 3);
	
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
	/*
	if (err.core == err.PERMISSION_DENIED) {
        alert('El usuario no ha concedido los privilegios de geolocalización');
    } else if (err.core == err.POSITION_UNAVAILABLE) {
        alert('Posicion no disponible');
    } else if (err.core == err.TIMEOUT) {
        alert('Demasiado tiempo intentando obtener la localización del usuario.');
    } else if (err.core == err.UNKNOWN) {
        alert('Error desconocido');
    } else {
        alert('Error insesperado');
    }*/
	
	(function(loading, success){
			var xhr = XMLHttpRequest !== undefined
						? new XMLHttpRequest()
						: new ActiveXObject('Microsoft.XMLHTTP');

				loading.apply(null, []);
				xhr.open('get', 'http://freegeoip.net/json/', true);
				xhr.onreadystatechange = function()
				{
					if(xhr.readyState === 4)
					{
						success.call(null, JSON.parse(xhr.responseText));
					}
				}
				xhr.send();
		}(function(){
			console.log("cargandoIp...");
		}, function(response){
			
			writeCookie('addressCurrentLon', response.longitude, 3);
			writeCookie('addressCurrentLat', response.latitude, 3);
			console.log("Direccion Inicial: IP " + response.latitude + ", " + response.longitude);
			
	}));
	
};





//******************** END GEOLOCALIZACION ************************************************
function getAddressCoordenada(lat, lon){
	var address = "";
	var latlng = new google.maps.LatLng(lat, lon);
	var geocoder = geocoder = new google.maps.Geocoder();
	geocoder.geocode({ 'latLng': latlng }, function (results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			if (results[1]) {
				address = results[1].formatted_address;
				localStorage.setItem("addressTemp", address);
			}
		}
	});
}

function crearPromocionObjetoDistancia(valor, indice, distancia, ubicacion){
	var objetoPromocion = new Object();
	objetoPromocion.accion = valor.accion;
	objetoPromocion.categoria = valor.cat_id;
	objetoPromocion.descripcion = valor.descripcion;
	objetoPromocion.footer = valor.footer;
	objetoPromocion.logoImg = valor.logo;
	objetoPromocion.nombre = valor.name;
	objetoPromocion.notificar = valor.notificar;
	objetoPromocion.oferta = valor.oferta;
	objetoPromocion.slogan = valor.slogan;
	objetoPromocion.telefono = valor.telefono;
	objetoPromocion.ubicacion = ubicacion;
	objetoPromocion.distancia = distancia;
	
	if(programaIDGlobal.toString() === '5'){
		objetoPromocion.unidad = "";
	}else{
		if(failNavigation == "true"){
			objetoPromocion.unidad = " km";
		}else{
			objetoPromocion.unidad = "";
		}
	}
	objetoPromocion.latitud = ubicacion.lat;
	objetoPromocion.longitud = ubicacion.lon;
	objetoPromocion.url = valor.url;
	objetoPromocion.idPromo = valor.id + " " + indice;
	
	if (typeof(ubicacion.lon) === 'undefined'){
		
	}else
		console.log(ubicacion.lat + ", " + ubicacion.lon);
	return objetoPromocion;
}

function eliminarDuplicados(promosIn){
	var noDuplicados = [];
	$.each(promosIn, function(ind, va) {
		var indiceEspacio = va.idPromo.indexOf(' ')
		var idLoopTemp = va.idPromo.substring(0, indiceEspacio);
		var distanceLoopTemp = va.distancia;
		var agregar = true;
		//console.log(va.idPromo + " | " + va.distancia);
		$.each(noDuplicados, function(dupIn, dupVa) {
			var indiceEspacio2 = dupVa.idPromo.indexOf(' ')
			var idLoopTemp2 = dupVa.idPromo.substring(0, indiceEspacio2);
			var distanceLoopTemp2 = dupVa.distancia;
			
			if(idLoopTemp === idLoopTemp2){
				if(distanceLoopTemp === distanceLoopTemp2){
					agregar = false;
				}
			}
		})
		if(agregar == true){
			noDuplicados.push(va);
		}
	})
	return noDuplicados;
}

//Calcula distancia en km entre dos puntos 
function calculaDistancia(lat1, lon1, lat2, lon2){
	rad = function(x) {
		return x*Math.PI/180;
	}
	var R     = 6378.137;//Radio de la tierra en km
	var dLat  = rad( lat2 - lat1 );
	var dLong = rad( lon2 - lon1 );

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	//document.forms[0].dist.value = d;
	return d.toFixed(2);//Retorna tres decimales
}

function createObjetoJSONCoordenada(lat, lon, estadoIn){
	var objetoJSON = {
		"latitud": lat,
		"longitud":lon,
		"estado":estadiIn
	}
	return objetoJSON;
}

function getPromocionSelected(){
	var promocionTemp = [];
	$.each(promociones, function(index, val) {
		if(val.id.toString() === promocionIDGlobal){
			 promocionTemp = val;
		}
	})
	return  promocionTemp;
}

function getCategoriasByPrograma(){
	var categoriasTemp = [];
	var casoEspecial1 = false;
	var casoEspecial2 = false;
	if(programaIDGlobal.toString() === '6'){
		casoEspecial1 = true;
	}
	if(programaIDGlobal.toString() === '5'){
		casoEspecial2 = true;
	}
	
	categoriasTemp.push(createCategoriaVerTodos());
	$.each(categorias, function(index, val) {
		if(val.program_id != null){
			if(val.program_id.toString() === programaIDGlobal){
				val.top_ad = "DataPromo.html";
				if(casoEspecial1 == true){
					if(val.program_id === 6){
						if(val.accion === 0){
							categoriasTemp.push(val);
						}
					}
				}else if(casoEspecial2 == true){
					if(val.title === 'Buen Fin 15 MSI'){
					}else{
						categoriasTemp.push(val);
					}
				}else{
					categoriasTemp.push(val);
				}
			}
		}
	})
	return categoriasTemp;
}

function getPrograma(){
	var programaTemp = new Object();
	$.each(programas, function(index, val) {
		if(val.id.toString() === programaIDGlobal){
			programaTemp = val;
		}
	})
	return programaTemp;
}

function getCategoriaNameTodas(){
	var objetoJSON = {
		"top_ad":"lupa.png",
		"title":"Todas las promociones",
		"program_id":100,
		"logo":"lupa.png",
		"id":100,
		"accion":100
	}
	return objetoJSON;
}

function createCategoriaVerTodos(){
	var objetoJSON = {
		"top_ad":"DataPromo.html",
		"title":"Todas las promociones",
		"program_id":100,
		"logo":"lupa.png",
		"id":100,
		"accion":100
	}
	return objetoJSON;
}

function createCategoriaMamaBanorte(){
	var objetoJSON = {
		"top_ad" : "DataSubCat.html",
		"title":"Mamá Banorte",
		"program_id":11,
		"logo":"mamaBanorte.png",
		"id":0,
		"accion":10
	}
	return objetoJSON;
}

function createCategoriaNoviaBanorte(){
	var objetoJSON = {
		"top_ad" : "DataSubCat.html",
		"title":"Novia Banorte",
		"program_id":11,
		"logo":"mamaBanorte.png",
		"id":1,
		"accion":10
	}
	return objetoJSON;
}

function orderByProperty(prop) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function (a, b) {
    var equality = a[prop] - b[prop];
    if (equality === 0 && arguments.length > 1) {
      return orderByProperty.apply(null, args)(a, b);
    }
    return equality;
  };
}

function cargarArrays(){
	sourceJSONGLobal = JSON.parse(localStorage.username)
	
	
	for(var keyName in sourceJSONGLobal){
		var key=keyName ;
		var object= sourceJSONGLobal[keyName];

		if(key === 'programas')
			programas = object;
		else if(key === 'categorias')
			categorias = object;
		else if(key === 'promociones')
			promociones = object;		
	}
	
	console.log(programas);
	//console.log(categorias);
	//console.log(promociones);
}




