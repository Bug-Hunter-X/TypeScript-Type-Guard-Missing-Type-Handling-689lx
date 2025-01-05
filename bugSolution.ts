function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

function processValue(value: number | string | boolean): void {
  if (typeof value === 'number') {
    printNumber(value);
  } else if (typeof value === 'string') {
    printString(value);
  } else if (typeof value === 'boolean') {
    console.log('Boolean value:', value);
  } else {
    console.log('Unexpected type');
  }
}

processValue(10);
processValue('hello');
processValue(true); // Now handles boolean type correctly
processValue(null); // Handles null type correctly
processValue(undefined); // Handles undefined type correctly