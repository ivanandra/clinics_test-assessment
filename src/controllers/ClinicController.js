const apiService = require('../services/apiService');

const self = (module.exports = {
    async getAll(req, res){
        try {
            const searchParameter = req.params.searchParameter;
            console.log(searchParameter);
            const results = await apiService(searchParameter);
            res.json(results);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Error' });
          }
    }
})