const Client  = require('@veryfi/veryfi-sdk');

const client_id = 'vrfTubyeTPYN55OWpUUkJxeghtzvJJck934nAj8';
const client_secret = 'TbYF2HzpnTyvv6Uj0se12HOizuj4jANfarixMlE4Txo1zdKMvpTIKvIRr7dIjiUCP8O7lLmjEcZhjgkuIGRKw9zJ6YGEJHfJUHo7O46MZcWRXfCnnbaoDWvkLmEwD6HW';
const username = 'a22fu';
const api_key = 'f6e6a69f985f3af384eece34c92640ad';
var fs = require('fs');

let my_client = new Client(client_id, client_secret, username, api_key);


const response = async() => await my_client.process_document('Receipt_17Mar2023_121343.pdf');

response().then(console.log);

/*
response().finally(

    fs.writeFile ("receipt.json", , function(err) {
        if (err) throw err;
        console.log('complete');
        }
    )
) 
*/