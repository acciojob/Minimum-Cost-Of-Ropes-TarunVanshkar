function calculateMinCost() {
  //your code here
  // get the input value and convert it to an array of integers
    const input = document.getElementById("rope-lengths").value;
    const ropeArray = input.split(",").map(Number);   // .map(Number)  convert each element of array into number
    
    // sort the rope lengths in increasing order
    ropeArray.sort((a, b) => a - b);
    
    // initialize the total cost to 0
    let totalCostOfRope = 0;
    
    // combine the smallest two ropes at each step until only one rope is left
    while (ropeArray.length > 1) {
      const rope1 = ropeArray.shift(); // remove the first array element and return it
      const rope2 = ropeArray.shift();
      const combinedRope = rope1 + rope2; // combine the two ropes
      totalCostOfRope += combinedRope; // add the cost of combining the two ropes
      ropeArray.push(combinedRope); // add the combined rope back to the array
    //   console.log(ropeArray, combinedRope);
      ropeArray.sort((a, b) => a - b); // sort the array again in non-decreasing order
    //   console.log(ropeArray)
    }
    
    // display the minimum cost in the result div
    document.getElementById("result").innerHTML = totalCostOfRope;
}  
