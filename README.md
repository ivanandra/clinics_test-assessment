This is a REST API for searching veterinary and dental clinics based on location, name, and availability.

## Installation
Clone the repository from GitHub.
Install dependencies using npm i.
Build and start the Docker containers using docker-compose up.

## Usage
Send a GET request to: 
/api/clinics/search 
With the following parameters in the query string:

## name (optional): 
the name of the clinic to search for.
## state (optional): 
the state where the clinic is located.
## availability (optional): 
the hours of availability at the clinic, in the format hh:mm (e.g. 09:00). Multiple availability times can be searched for by passing multiple parameters.

If successful, the API will return a JSON object containing an array of clinic objects matching the search criteria.

### Example Request

GET /api/clinics/search?name=Mayo%Clinic&state=New%20York&availability=09:00&availability=10:00

### Example Response

{
  "vetClinicsFiltered": [
    {
      "name": "PetCare Veterinary Clinic",
      "address": "123 Main St",
      "city": "New York",
      "state": "New York",
      "zip": "10001",
      "availability": ["09:00", "10:00"]
    }
  ],
  "dentalClinicsFiltered": []
}
