define(["require", "exports", "greeter"], function (require, exports, model) {
    "use strict";
    var el = document.getElementById('content');
    var greeter = new model.Greeter(el);
    greeter.start();
});
