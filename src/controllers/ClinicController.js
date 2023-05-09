const apiService = require('../services/apiService');

const self = (module.exports = {
    async getAll(req, res){
        try {
            const searchParams = req.params.searchParams;
            const searchParamsArray = searchParams.split(',').map(param => param.trim());
            

            console.log(searchParamsArray);
            
            const results = await apiService(searchParamsArray);
            res.json(results);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Error' });
          }
    }
})