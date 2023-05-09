const axios = require('axios');

const dentalClinicsService = async () => {
  const response = await axios.get(`https://storage.googleapis.com/scratchpay-code-challenge/dental-clinics.json`);
  return response.data;
};

module.exports = dentalClinicsService;