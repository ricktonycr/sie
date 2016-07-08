function Profesor(id,nombre){
  this.id = id;
  this.nombre = id;
  this.cursos = new ListaCursos();
}

Profesor.prototype.obtenerId = function(){
  return this.id;
};

Profesor.prototype.obtenerNombre = function(){
  return this.nombre;
};

Profesor.prototype.cambiarNombre = function(nuevoNombre){
  this.nombre = nuevoNombre;
};

Profesor.prototype.obtenerCursos = function(){
  return this.cursos;
};