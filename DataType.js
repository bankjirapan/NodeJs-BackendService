//Object
const person = {
    name: "llUJO",
    Age: 19,
    greet() {
        console.log("Hi " + this.name);
    }
}
// person.greet();

//  --------  Array 
const Address = ["Bangkok","Pichit","Ayuthaya"];

// for(Addr of Address){
//     console.log(Addr);
// }

Address.map(dataAddr =>{
    console.log("Address : "+dataAddr);
})