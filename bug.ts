function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

function processValue(value: number | string): void {
  if (typeof value === 'number') {
    printNumber(value);
  } else if (typeof value === 'string') {
    printString(value);
  } else {
    console.log('Unexpected type');
  }
}

processValue(10);
processValue('hello');
processValue(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number | string'.