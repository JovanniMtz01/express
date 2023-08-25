const db = require('../../database/models');

const apiContrller = {
    getAll: (req, res) => {
        
        db.Carta.findAll()
            .then((resultados) => {
                let json={
                    statusCode:200,
                    count:resultados.length,
                    info:[]
                }
                json.info=resultados.map(function(item){
                    return item.dataValues;
                })

                res.status(200).json(json);
            })
            .catch(error => res.status(505).json(error));
    }
}

module.exports = apiContrller;