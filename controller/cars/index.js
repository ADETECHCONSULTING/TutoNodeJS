module.exports = (server) => {
    const Car = server.models.Car;
  return {
      list,
      insert,
      update,
      remove
  };

  function list(req, res, next){
      Car.find()
          .then(cars => res.send(cars))
          .catch(err => res.status(500).send(err))
  }

  function insert(req, res, next){
      Car.create(req.body)
          .then(car => res.status(201).send(car))
          .catch(err => res.status(500).send(err));
  }

  function update(req, res, next){
      Car.findByIdAndUpdate(req.params.id, req.body)
          .then(data => res.status(204).send())
          .catch(err => res.status(500).send(err));
  }

  function remove(req, res, next){
      Car.findByIdAndRemove(req.params.id)
          .then(data => res.status(204).send())
          .catch(err => res.status(500).send(err));
  }

};