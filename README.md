# TypeScript Type Guard Missing Type Handling

This repository demonstrates a common error in TypeScript type guards: failing to handle all possible types.

## Bug Description

The `processValue` function uses a type guard to check if the input value is a number or a string. However, it does not handle other possible types, such as booleans. This leads to a runtime error when a boolean value is passed to the function.

## Solution

The solution is to modify the type guard to explicitly handle all possible types, or to use a more comprehensive type checking approach.