This is a REST API for searching veterinary and dental clinics based on location, name, and availability.

## Installation
Clone the repository from GitHub. 
Build and start the Docker container using docker-compose up. 
So all the required dependencies will be installed by runnning the docker container.

## Usage
Send a GET request to: 
/api/clinics/search 
With the following parameters in the query string:

### name (optional): 
the name of the clinic to search for.
### state (optional): 
the state where the clinic is located.
### availability (optional): 
the hours of availability at the clinic, in the format hh:mm (e.g. 09:00). Multiple availability times can be searched for by passing multiple parameters.

If successful, the API will return a JSON object containing an array of clinic objects matching the search criteria.

### Example Request

GET /api/clinics/search?name=Mayo%Clinic&state=Florida&availability=09:00&availability=20:00

### Example Response

{
  "dentalClinicsFiltered": [
    {
      "name": "Mayo Clinic",
      "stateName": "Florida",
      "availability": {
                "from": "09:00",
                "to": "20:00"
            }
    }
  ],
  "vetClinicsFiltered": []
}
