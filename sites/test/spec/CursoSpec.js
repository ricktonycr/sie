describe("Un curso", function() {
 
    var curso;
 
    beforeEach(function() {
        curso = new Curso("Introducción a la computacíon",1234);
    });
 
    it("debe retornar el mismo ID", function() {
        expect(curso.obtenerId()).toBe(1234);
    });
    it("debe estar desactivado cuando está recién creado", function() {
        expect(curso.estaActivo()).toBe(false);
    });

    it("debe retornar el mismo título", function() {
        expect(curso.obtenerTitulo()).toBe("Introducción a la computacíon");
    });
 
    describe("Cuando se añade un profesor", function() {
 
        beforeEach(function() {
            curso.cambiarProfesor("Hernando de Soto");
        });
 
        it("debe retornar el nombre del profesor", function() {
            expect(curso.obtenerProfesorActual()).toBe("Hernando de Soto");
        });
 
        it("debe seguir desactivado", function() {
            expect(curso.estaActivo()).toBe(false);
        });
    });

    describe("cuando se cambia de titulo", function() {
 
        beforeEach(function() {
            curso.cambiarTitulo("Programación de sistemas");
        });
 
        it("debe retornar el nuevo título del curso", function() {
            expect(curso.obtenerTitulo()).toBe("Programación de sistemas");
        });
 
        it("debe seguir desactivado", function() {
            expect(curso.estaActivo()).toBe(false);
        });
    });

    describe("Cuando activa el curso", function() {
 
        beforeEach(function() {
            curso.activar();
        });

        it("debe estar activado", function() {
            expect(curso.estaActivo()).toBe(false);
        });
    });
});