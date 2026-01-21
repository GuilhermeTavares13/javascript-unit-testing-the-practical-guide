export function add(numbers) {
  let sum = 0;

  if(!numbers) {
    throw new Error('Numbers not provided.')
  }
  

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
  
}
