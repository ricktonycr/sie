describe("Un profesor", function() {
 
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
});