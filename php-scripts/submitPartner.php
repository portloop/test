<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $website = $_POST['website'];
    $goal = $_POST['goal'];
    $typeBusiness = $_POST['typeBusiness'];
    $text = $_POST['text'];

    $properties = [
        'properties' => [
            'firstname' => $firstName,
            'lastname' => $lastName,
            'email' => $email,
            'website' => $website,
            'goal' => $goal,
            'typebusiness' => $typeBusiness,
            'text' => $text,
            'lead_status' => 'active_lead',
            'hubspot_owner_id' => '1285136351'
        ]
    ];

    $contactEndpoint = 'https://api.hubapi.com/crm/v3/objects/contacts';
    $response = hubspotAPIRequest($properties, $contactEndpoint);
    print_r($response);

    if (isset($response->id)) {
        $list = ['vids' => [$response->id]];
        // 1 for contact list 'first'
        // $listEndpoint = 'https://api.hubapi.com/contacts/v1/lists/1/add';
        // 2 for contact list 'Second'
        $listEndpoint = 'https://api.hubapi.com/contacts/v1/lists/106/add';

        $response = hubspotAPIRequest($list, $listEndpoint);
        if (isset($response->updated) && !empty($response->updated)) {
            print_r($response);
            $result = array(
                'status' => 'Success',
                'message' => 'Contact is created successfully and list is assigned to the contact as well',
            );
            return json_encode($result);
            die();
        }
    }
    $result = array(
        'status' => $response->status,
        'message' => $response->message,
        'response' => $response,
    );
    return json_encode($result);
    die();

}

function hubspotAPIRequest($request, $endpoint)
{


    $headers = [
        'Content-Type: application/json',
        'Authorization: Bearer pat-eu1-d8254652-0b10-41f6-906d-2b892cc8ff3b',
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($request));
    curl_setopt($ch, CURLOPT_URL, $endpoint);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);

    return json_decode($response);
}