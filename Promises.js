let firstName="Srushti";
let lastName="";
const setLastName=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        lastName="Payghan";
        resolve(lastName);
    },2000);
})
// setLastName.then(()=>{
//     console.log(firstName+" "+lastName);
// });

const displayFullName=async()=>{
    lastName=await setLastName;
    console.log(`${firstName} ${lastName}`);
}
displayFullName();