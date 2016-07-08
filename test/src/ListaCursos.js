function ListaCursos(){
  this.cursos = [];
}

ListaCursos.prototype.vaciar = function(){
  this.cursos = [];
};

ListaCursos.prototype.longitud = function(){
  return this.cursos.length;
};

ListaCursos.prototype.estaVacio = function(){
  return this.cursos.length==0;
};

ListaCursos.prototype.existeCurso = function(id){
  var esta = false;
  for(var i=0;i<this.cursos.length;i++){
    if(this.cursos[i].obtenerId()==id){
      esta = true;
      break;
    }
  }
  return esta;
};

ListaCursos.prototype.cursosProfesor = function(id){
  var cursos = [];
  for(var i=0;i<this.cursos.length;i++){
    if(this.cursos[i].obtenerProfesorActual().obtenerId()==id){
      cursos.push(this.cursos[i].obtenerProfesorActual());
    }
  }
  return cursos;
};

ListaCursos.prototype.añadirCurso = function(Curso){
  this.cursos.push(Curso);
};

ListaCursos.prototype.removerCurso = function(id){
  for(var i=0;i<this.cursos.length;i++){
    if(this.cursos[i].obtenerId()==id){
      this.cursos.splice(i);
    }
  }
};

ListaCursos.prototype.obtenerCurso = function(index){
  return this.cursos[index];
};