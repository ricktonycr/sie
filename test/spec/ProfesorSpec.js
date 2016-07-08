describe("Un profesor [caminos independientes]", function() {
 
    var profesor;
 
    beforeEach(function() {
        profesor = new Profesor(1111,"Steve Jobs");
    });

    it("debe retornar el mismo ID", function() {
        expect(profesor.obtenerId()).toBe(1111);
    });
 
    it("no debe tener cursos a cargo cuando está recién creado", function() {
        expect(profesor.obtenerCursos().estaVacio()).toBe(true);
    });

    it("debe retornar el mismo nombre", function() {
        expect(profesor.obtenerNombre()).toBe("Steve Jobs");
    });
 
    describe("Cuando se cambia su nombre", function() {
 
        beforeEach(function() {
            profesor.cambiarNombre("René Descartes");
        });
 
        it("el id no debe cambiar", function() {
            expect(profesor.obtenerId()).toBe(1111);
        });
 
        it("los cursos no deben cambiar", function() {
            expect(profesor.obtenerCursos().estaVacio()).toBe(true);
        });
    });

    describe("Cuando se obtienen los cursos", function() {
        var cursos;
        beforeEach(function() {
            profesor.cambiarNombre("René Descartes");
            var cursos=profesor.obtenerCursos();
        });
 
        it("debe ser el mismo objeto de lista de cursos", function() {
            expect(profesor.obtenerCursos()===cursos).toBe(true);
        });
    });
});