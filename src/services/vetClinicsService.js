const axios = require('axios');

const vetClinicsService = async (searchParameter) => {
  const response = await axios.get(`https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json`);
  console.log(response);
  return response.data;
};

module.exports = vetClinicsService;