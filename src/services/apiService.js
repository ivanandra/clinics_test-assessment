const vetClinicsService = require('./vetClinicsService');
const dentalClinicsService = require('./dentalClinicsService');

const apiService = async (searchParameter) => {
  const vetClinicsResult = await vetClinicsService(searchParameter);
  const dentalClinicsResult = await dentalClinicsService(searchParameter);
  
  return {
    //TODO, Query to find the results on searchParameter
    vetClinicsResult,
    dentalClinicsResult,
  };
};

module.exports = apiService;