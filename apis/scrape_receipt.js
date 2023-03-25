const Client = require('@veryfi/veryfi-sdk');

const Dotenv = require('dotenv-webpack');

require('dotenv').config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const username = process.env.USER;
const api_key = process.env.API_KEY;

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
        // for (let i = 0; i < itemarray.length; i++){
        //     console.log(itemarray[i]);
        // }
    },
    function(error){
        console.log("Something went wrong")
        console.log(error)
    }
)

return itemarray
