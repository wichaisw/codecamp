const handleNameList = nameList => {
  let message = 'Hello, ';

  if (nameList.length === 2) {
    return message = message + `${nameList[0]} and ${nameList[1]}.`
  } else {
    for (let i = 0; i < nameList.length - 1; i++) {
      message = message + `${nameList[i]}, `;
    }
    message = message + `and ${nameList[nameList.length - 1]}.`
  }
  return message;
}

function greet(name, anotherName) {
  if (anotherName) {
    return `Hello, ${name} and ${anotherName}.`;
  } else if(Array.isArray(name)) {
    return handleNameList(name);
  } else if(name === null) {
    return 'Hello, my friend.';
  } else if(name === name.toUpperCase()) {
    return `HELLO, ${name.toUpperCase()}!`;
  } else {
  return `Hello, ${name}.`;
  }
}

// const greet = (name) => {
//   switch(name) {
//     case null:
//       return 'Hello, my friend.';
//     case name.toUpperCase():
//       return `HELLO, ${name.toUpperCase()}!`;
//     case [name1, name2]:
//       return `Hello, ${name[0]} and ${name[1]}`
//     default:
//       return `Hello, ${name}.`;
//   }
// }

export { greet };

