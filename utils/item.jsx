import { Component } from 'react'

export default class Item{    
    constructor(item_name, shelf_life){
        this.name = item_name;
        this.input_date = new Date();
        this.shelf_life = shelf_life;
        this.expiry_date = this.input_date + shelf_life;
    }
}