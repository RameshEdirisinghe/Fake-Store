let customer = [
    {
        id: "001",
        name: "ramesh"
    }
]

let orders = [
    {
        id: "001",
        name: "Ramesh",
        items: [{
            itemCode: "001",
            itemName: "Ramesh",
            qty: 5,
        }


        ]
    }
]

let itms = [
    {
        id: "C01",
        name: "Bun",

    }, {
        id: "C02",
        name: "Rice",

    }]


function LogIn() {

    let cusName = document.getElementById("CusName").value;
    let addbody = document.getElementById("addCus");

    for (let i = 0; i < customer.length; i++) {
        if (customer[i].name == cusName) {
            itembody();
            order();
        } else {
            let body = `<h1>Create Account</h1>
        <input type="text" placeholder="Customer Name" id="addName">
        <input type="text" placeholder="Contact Number" id="Contact">
        <input type="text" placeholder="Address" id="Address">
        <input type="button" value="Create" onclick="add()" >`

            addbody.innerHTML = body;
        }
    }


}
function add() {
    let addName = document.getElementById("addName").value;
    let Contact = document.getElementById("Contact").value;
    let Address = document.getElementById("Address").value;


    let CustomerObject = {
        name: addName,
        ContactNo: Contact,
        address: Address
    }
    customer.push(CustomerObject);
    console.log(customer);

    let items = document.getElementById("items");

    itembody();

    
}

function itembody(){
    let itemBody = `        <h1>Items</h1>
        <label for="cars" id="IC">Choose a car:</label>
            <select id="cars">
                <option value="volvo">${itms[0].id}</option>
                <option value="saab">${itms[1].id}</option>
            </select>
        <input type="text" placeholder="Item Name" id="IN">
        <input type="text" placeholder="Qty" id="qty">
        <input type="button" value="Order" onclick="order()">`


    items.innerHTML = itemBody;

}
function order() {

    let cusName = document.getElementById("CusName").value;
    let IC = document.getElementById("IC").value;
    let IN = document.getElementById("IN").value;
    let qty = document.getElementById("qty").value;

    let ordersObject = {
        id: cusId,
        name: cusName,
        items: [{
            itemCode: IC,
            itemName: IN,
            qty: qty,
        }


        ]
    }
    orders.push(ordersObject);
    console.log(orders);


}



