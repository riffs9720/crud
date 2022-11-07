const Persons = require('../models/Persons')

module.exports = {
    async index(req, res) {
        const persons = await Persons.findAll().catch(err =>{
            console.log(err.message);
        })

        return res.json(persons)
    }
}