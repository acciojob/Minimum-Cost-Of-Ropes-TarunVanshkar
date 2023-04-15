function calculateMinCost() {
  //your code here
   // first of all get elements
 let input=document.getElementById("rope-lengths");
 let inputArr=input.value.split(",");

 // Convert string into number
 for(let i=0; i<inputArr.length; i++)
 {
  inputArr[i]=Number(inputArr[i]);
 }

 // Sort array in ascending order
 inputArr.sort(function(a, b) {
  return a-b;
 })

 let totalCost=0;
 // Run loop till array length become 2
 while(inputArr.length>1)
 {
  let rope1=inputArr[0];
  let rope2=inputArr[1];
  let cost=rope1+rope2;
  totalCost+=cost;
  
  // delete first two elements
  inputArr.splice(0, 2);

  // add cost to array
  inputArr.push(cost);

  inputArr.sort(function(a, b) {
    return a-b;
   })
 }

 // Add answer to #result div element
 document.getElementById("result").innerText=totalCost;
}  
