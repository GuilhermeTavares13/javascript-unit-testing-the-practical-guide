export function transformToNumber(value) {
  if (!value) {
    throw new Error('No value was passed.');
  }
  if(isNaN(value)) {
    throw new Error('Only numeric value is accepted.');
  }
  return +value;
}

