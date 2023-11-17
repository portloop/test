const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/submit-form', async (req, res) => {
  try {
    const { email } = req.body;

    const properties = {
      properties: {
        email,
        hs_lead_status: 'New',
        hubspot_owner_id: '1285136351',
      },
    };

    const contactEndpoint = 'https://api.hubapi.com/crm/v3/objects/contacts';
    const response = await hubspotAPIRequest(properties, contactEndpoint);

    console.log(response);

    if (response.id) {
      const list = { vids: [response.id] };
      const listEndpoint = 'https://api.hubapi.com/contacts/v1/lists/83/add'; // Replace with your list endpoint

      const listResponse = await hubspotAPIRequest(list, listEndpoint);

      console.log(listResponse);

      if (listResponse.updated) {
        const result = {
          status: 'Success',
          message: 'Contact is created successfully and list is assigned to the contact as well',
        };
        res.json(result);
      } else {
        const result = {
          status: listResponse.status,
          message: listResponse.message,
          response: listResponse,
        };
        res.json(result);
      }
    } else {
      const result = {
        status: response.status,
        message: response.message,
        response,
      };
      res.json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
  }
});

function hubspotAPIRequest(request, endpoint) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer pat-eu1-d8254652-0b10-41f6-906d-2b892cc8ff3b',
  };

  return axios.post(endpoint, request, { headers })
    .then(response => response.data)
    .catch(error => {
      console.error('Error making HubSpot API request:', error);
      throw error;
    });
}

module.exports = router;
