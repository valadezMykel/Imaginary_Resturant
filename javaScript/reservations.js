// const path = require("path");
// const fs = require("fs");
const customer = class Customer{
    constructor(name, phone, email, id){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = id;
    }
};


$("#submit").click(function(){
    
    console.log("pressed");
    const newCustomer = JSON.stringify(new customer(($("#name").val()),($("#phone").val()),($("#email").val()),($("#id").val())));
    console.log(newCustomer);
    // newCustomer = JSON.stringify(newCustomer);

    $.post("localhost:8080/api/reservation", newCustomer)
});

