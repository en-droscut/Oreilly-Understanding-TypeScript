let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  // without this extra check it will not work because the userInput is 'unknown'
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };

  // while (true) {} // also a function that has an infinte loop NEVER returns anything
}

generateError("An error occured", 500);
