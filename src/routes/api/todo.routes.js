const {Router} = require('express');
const router = Router();

const TodoModel = require('../../models/Todo')

router.post('/todo-save', async (req, res) => {

    // get data
    const {title, description} = req.body;

    // create the model
    const todo = new TodoModel({
        title,
        description
    })

    // save data
    const resjson = {
        success: false
    }
    if(await todo.save()){
        resjson.success = true;
    }
    

    res.json(resjson);
})

router.get('/todo', async (req, res) => {
    
    const todos = await TodoModel.find({});

    res.json(todos);
})

router.put('/todo-edit', async (req, res) => {
    const {id ,title, description} = req.body;

    const todo = await TodoModel.findByIdAndUpdate(id, {
        title,
        description
    });

    const resjson = {success: false};
    if (todo) resjson.success = true;

    res.json(resjson);
})

router.delete('/todo-remove', async (req, res) => {
    const {id} = req.body;
    
    const todoRemoved = await TodoModel.findByIdAndRemove(id);

    const resjson = {
        success: false
    }
    if(todoRemoved) resjson.success = true;

    res.json(resjson)
})

router.get('/todo/:id', async (req, res) => {

    const {id} = req.params;
    const todo = await TodoModel.findById(id);

    let resjson = {success: false, todo: {}}
    if(resjson) resjson = {...resjson, success: true, todo}


    res.json(resjson);
})

module.exports = router;