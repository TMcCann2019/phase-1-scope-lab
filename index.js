// Write your solution in this file!
var customerName= 'bob'
function upperCaseCustomerName(){
    if (customerName){
        customerName = customerName.toUpperCase()
    }
}

function setBestCustomer(){
    bestCustomer = 'not bob'
    console.log(bestCustomer)
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    console.log(bestCustomer)
}

const leastFavoriteCustomer = 'Tom'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'not tom'
    console.log(leastFavoriteCustomer)
}