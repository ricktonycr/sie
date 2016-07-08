describe("Un saludo [interfaz]", function() {
 
    var saludo;
 
    beforeEach(function() {
        saludo = new Saludo("Richard Cruz Rojas","tarde");
    });

    it("debe retornar el mismo nombre al ser creado", function() {
        expect(saludo.obtenerNombre()).toBe("Richard Cruz Rojas");
    });

    it("debe retornar el mismo tiempo al ser creado", function() {
        expect(saludo.obtenerTiempo()).toBe("tarde");
    });
 
    describe("Cuando se realiza un saludo", function() {
 
        it("sólo debe aparecer el primer nombre", function() {
            expect(saludo.saludar()).toBe("Buenas tardes Richard");
        });
    });
});