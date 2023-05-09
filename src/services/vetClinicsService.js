const axios = require('axios');

const vetClinicsService = async () => {
  const response = await axios.get(`https://storage.googleapis.com/scratchpay-code-challenge/vet-clinics.json`);
  return response.data;
};

module.exports = vetClinicsService;