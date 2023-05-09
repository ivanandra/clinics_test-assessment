const apiService = require('../services/apiService');

const self = (module.exports = {
    async getAll(req, res){
        try {
            
            const name = req.query.name || '';
            const stateName = req.query.state || '';
            const availability = req.query.availability || [];
            let searchParams = [];

            console.log(availability.length);


            if (availability.length > 0) {
              searchParams = [name, stateName, ...(availability ? availability.split(',') : [])].filter(param => param !== '');
            } else {
              searchParams = [name, stateName].filter(param => param !== '');;
            }
            console.log(searchParams);
            
            const results = await apiService(searchParams);
            res.json(results);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server Error' });
          }
    }
})