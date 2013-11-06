/*global describe, it */
'use strict';
(function () {
    describe('Passphrase input screen', function () {
        it('should include a new passphrase', function () {
            var dm = AeroGear.DataManager();

            dm.add({
                name: "demo",
                type: "WebSQL"
            });
            dm.stores.demo.open();
            var data = [
                {
                    "id": 1,
                    "name": "Lea",
                    "type": "Skywalker"
                }
            ];
            dm.stores.demo.save( data );
        });

        it('should generate the key for encryption', function () {

        });
    });
    describe('Password management', function () {
        it('should run here few assertions', function () {

        });
        it('should generate the key for encryption', function () {

        });
    });

})();
