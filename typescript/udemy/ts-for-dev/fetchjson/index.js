"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (res) {
    try {
        var todo = res.data;
        var id = todo.id;
        // const finished = todo.finished |||--> bug because finsihed is not on the response object
        var title = todo.title;
        var completed = todo.completed;
        logTodo(id, title, completed);
    }
    catch (error) {
        console.log("Ohhh noooooo, you had error", error);
    }
});
var logTodo = function (id, title, completed) {
    console.log("\n  The Todo with ID: ".concat(id, "\n  Has a title of: ").concat(title, "\n  Is it finished? ").concat(completed, " \n"));
};
