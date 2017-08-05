var Todos = require('../models/todoModel');

module.exports = function(app){

    app.get('/api/setupTodos', function(req, res){

        //preencher a base
        var starterTodos = [
            {
                username: 'test',
                todo: 'Colocar o bucha 1',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Colocar o bucha 2',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Colocar o bucha 3',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });

}