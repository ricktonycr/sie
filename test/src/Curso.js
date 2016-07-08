function Curso(titulo,id){
  this.id = id;
  this.titulo = titulo;
  this.activo = false;
  this.profesorActual = null;
}

Curso.prototype.activar = function(){
  this.activo = true;
  return this.activo;
};

Curso.prototype.desactivar = function(){
  this.activo = false;
  return this.activo;
};

Curso.prototype.estaActivo = function(){
  return this.activo;
};

Curso.prototype.obtenerId = function(){
  return this.id;
};

Curso.prototype.obtenerTitulo = function(){
  return this.titulo;
};

Curso.prototype.obtenerProfesorActual = function(){
  return this.profesorActual;
};

Curso.prototype.cambiarTitulo = function(nuevoTitulo){
  var tituloAnterior = this.titulo;
  this.titulo = nuevoTitulo;
  return this.titulo;
};

Curso.prototype.cambiarProfesor = function(nuevoProfesor){
  var profesorAnterior = this.profesorActual;
  this.profesorActual = nuevoProfesor;
  return profesorAnterior;
};