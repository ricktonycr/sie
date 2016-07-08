function Saludo(nombre,tiempo){
  this.nombre = nombre;
  this.tiempo = tiempo;
}

Saludo.prototype.obtenerNombre = function(){
  return this.nombre;
};

Saludo.prototype.obtenerTiempo = function(){
  return this.tiempo;
};

Saludo.prototype.saludar = function(){
	var primer = this.nombre.split(" ")[0];
  var t = "";
  if(this.tiempo == "mañana")
    t = "Buenos días ";
  else if(this.tiempo == "tarde")
    t = "Buenas tardes ";
  else if(this.tiempo == "noche")
    t = "Buenas noches ";
  return t + primer;
};