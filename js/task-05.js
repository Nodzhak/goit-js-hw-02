function getSlice(array, value) {
   return array.indexOf(value) !== -1 ? array.slice(0, array.indexOf(value) + 1) : [];
  }
  
  console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
  console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
  console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
  console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
  console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));