let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  // without this extra check it will not work because the userInput is 'unknown'
  userName = userInput;
}
