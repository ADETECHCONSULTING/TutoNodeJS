module.exports = (server) => {
    const User = server.models.User;

    return {
        list,
        insert,
        update,
        remove
    };

    function list(req, res, next){
        User.find()
            .then(users => res.send(users))
            .catch(err => res.status(500).send(err))
    }

    function insert(req, res, next){
        User.create(req.body)
            .then(user => res.status(201).send(user))
            .catch(err => res.status(500).send(err));
    }

    function update(req, res, next){
        User.findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.status(204).send())
            .catch(err => res.status(500).send(err));
    }

    function remove(req, res, next){
        User.findByIdAndRemove(req.params.id)
            .then(data => res.status(204).send())
            .catch(err => res.status(500).send(err));
    }

};