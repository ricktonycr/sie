function Notificacion(id,mensaje,emisor,receptor){
  this.id = id;
  this.mensaje = mensaje;
  this.emisor = emisor;
  this.receptor = receptor;
  this.estado = "creado";
}

Notificacion.prototype.obtenerId = function(){
  return this.id;
};

Notificacion.prototype.obtenerMensaje = function(){
  return this.mensaje;
};

Notificacion.prototype.obtenerEmisor = function(){
  return this.emisor;
};

Notificacion.prototype.obtenerReceptor = function(){
  return this.receptor;
};

Notificacion.prototype.obtenerEstado = function(){
  return this.estado;
};

Notificacion.prototype.enviar = function(){
  this.estado = "send";
};

Notificacion.prototype.recibir = function(){
  this.estado = "received";
};

Notificacion.prototype.cancelar = function(){
  this.estado = "cancelado";
  console.error("Ocurrió un error, contacte al administrador, codigo de error: a24");
};