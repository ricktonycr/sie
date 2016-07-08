describe("Una lista de cursos [condiciones límites]", function() {
 
    var lista;
 
    beforeEach(function() {
        lista = new ListaCursos();
    });
 
    it("debe estar vacia cuando está recién creada", function() {
        expect(lista.estaVacio()).toBe(true);
    });
 
    describe("Cuando se añade un curso", function() {
 
        beforeEach(function() {
            var curso = new Curso("Nuevo Curso",1234);
            lista.añadirCurso(curso);
        });
 
        it("debe tener una longitud de 1", function() {
            expect(lista.longitud()).toBe(1);
        });
 
        it("debe existir el curso", function() {
            expect(lista.existeCurso(1234)).toBe(true);
        });
    });

    describe("cuando filtra por profesor", function() {
 
        beforeEach(function() {
            var curso1 = new Curso("Nuevo Curso 1",1234);
            curso1.cambiarProfesor(3333);
            var curso2 = new Curso("Nuevo Curso 2",1234);
            curso2.cambiarProfesor(4444);
            lista.añadirCurso(curso1);
            lista.añadirCurso(curso2);
        });
 
        it("debe retornar el numero de cursos con un profesor", function() {
            expect(lista.cursosProfesor(3333).longitud()).toBe(1);
        });
    });

    describe("cuando obtienes un curso según el índice", function() {
 
        beforeEach(function() {
            var curso1 = new Curso("Nuevo Curso 1",1234);
            curso1.cambiarProfesor(3333);
            var curso2 = new Curso("Nuevo Curso 2",1234);
            curso2.cambiarProfesor(4444);
            lista.añadirCurso(curso1);
            lista.añadirCurso(curso2);
        });
 
        it("debe de retornar el Curso indicado o null", function() {
            expect(lista.obtenerCurso(1).obtenerId()).toBe(1234);
        });
    });
});