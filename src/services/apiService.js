const vetClinicsService = require('./vetClinicsService');
const dentalClinicsService = require('./dentalClinicsService');

const apiService = async (searchParams) => {
  const vetClinicsResult = await vetClinicsService();
  const dentalClinicsResult = await dentalClinicsService();

  console.log('busca', searchParams);
  
  //filtering based on searchParameter
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
    //TODO, Query to find the results on searchParameter
    vetClinicsFiltered,
    dentalClinicsFiltered,
  };
};

module.exports = apiService;