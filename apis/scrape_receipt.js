const Client = require('@veryfi/veryfi-sdk');

const Dotenv = require('dotenv-webpack');

require('dotenv').config();

const client_id = 'vrfTubyeTPYN55OWpUUkJxeghtzvJJck934nAj8'; 

const client_secret = 'TbYF2HzpnTyvv6Uj0se12HOizuj4jANfarixMlE4Txo1zdKMvpTIKvIRr7dIjiUCP8O7lLmjEcZhjgkuIGRKw9zJ6YGEJHfJUHo7O46MZcWRXfCnnbaoDWvkLmEwD6HW'; 

const username = 'a22fu'; 

const api_key = 'f6e6a69f985f3af384eece34c92640ad'; 

var fs = require('fs');

let my_client = new Client(client_id, client_secret, username, api_key);
let itemarray = [];

let filename = 'IMG_1392.jpg';

//API call to get JSON data
async function getDoc(){
    return my_client.process_document(filename);
} 

getDoc().then(
    function(value){
        //puts 'shopping list' of strings into array
        let jsonarray = value["line_items"];
        for(let i = 0; i < jsonarray.length; i++){
            itemarray.push(jsonarray[i].description);
        }
        for (let i = 0; i < itemarray.length; i++){
            console.log(itemarray[i]);
        }
    },
    function(error){
        console.log("Something went wrong")
        console.log(error)
    }
)
return itemarray
