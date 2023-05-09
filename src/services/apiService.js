const vetClinicsService = require('./vetClinicsService');
const dentalClinicsService = require('./dentalClinicsService');

const apiService = async (searchParams) => {
  
  const vetClinicsResult = await vetClinicsService();
  const dentalClinicsResult = await dentalClinicsService();

  //filtering based on searchParams
  const vetClinicsFiltered = vetClinicsResult.filter(obj => {
    return searchParams.some(param => {
      for(const prop in obj){
        if(obj.hasOwnProperty(prop) && typeof obj[prop] === 'string'){
          if(obj[prop].toLowerCase().includes(param.toLowerCase())){
            return true;
          }
        }
      }
      return false;
    })
  });

  const dentalClinicsFiltered = dentalClinicsResult.filter(obj => {
    return searchParams.some(param => {
      for(const prop in obj){
        if(obj.hasOwnProperty(prop) && typeof obj[prop] === 'string'){
          if(obj[prop].toLowerCase().includes(param.toLowerCase())){
            return true;
          }
        }
      }
      return false;
    })
  });
  return {
    vetClinicsFiltered,
    dentalClinicsFiltered,
  };
};

module.exports = apiService;