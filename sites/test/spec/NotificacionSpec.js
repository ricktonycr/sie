describe("Un notificacion", function() {
 
    var notificacion;
 
    beforeEach(function() {
        notificacion = new Notificacion(1111,"Reunión de padres el Viernes 13.",2222,3333);
    });
 

    it("debe retornar el mismo ID", function() {
        expect(notificacion.obtenerId()).toBe(1111);
    });

    it("debe de estar en el estado 'creado'", function() {
        expect(notificacion.obtenerEstado()).toBe('creado');
    });

    it("debe retornar el mismo mensaje", function() {
        expect(notificacion.obtenerMensaje()).toBe("Reunión de padres el Viernes 13.");
    });

    it("debe retornar el mismo emisor", function() {
        expect(notificacion.obtenerEmisor()).toBe(2222);
    });


    it("debe retornar el mismo receptor", function() {
        expect(notificacion.obtenerReceptor()).toBe(3333);
    });
 
    describe("Cuando la notificación se envía", function() {
 
        beforeEach(function() {
            notificacion.enviar();
        });
 
        it("el estado debe ser 'enviado'", function() {
            expect(notificacion.obtenerEstado()).toBe('enviado');
        });
    });

    describe("Cuando la notificación se recibe", function() {
 
        beforeEach(function() {
            notificacion.recibir();
        });
 
        it("el estado debe ser 'recibido'", function() {
            expect(notificacion.obtenerEstado()).toBe('recibido');
        });
    });

    describe("Cuando la notificación se cancela", function() {
 
        beforeEach(function() {
            notificacion.cancelar();
        });
 
        it("el estado debe ser 'cancelado'", function() {
            expect(notificacion.obtenerEstado()).toBe('cancelado');
        });
    });
});