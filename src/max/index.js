/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
   for (let j =0;j<max.length;j++){
     for(var i =0;i<numbers.length - j;i++){
       var stakan;
       if(max[i] == Infinity){continue;}
       if(max[i] > max[i + 1]){
         stakan = max[i];
         max[i] = max[i + 1];
         max[i + 1] = stakan;
       }
     }
   }
  return max.length - 1;
  }
 
 


export default max;
