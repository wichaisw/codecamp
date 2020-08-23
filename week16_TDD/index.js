
const handleShoutedNameList = (nameList) => {
  let message = 'HELLO, ';

  if (nameList.length === 1) {
    return message + `${nameList[0]}.`;
  } else if (nameList.length === 2) {
    return message = message + `${nameList[0]} and ${nameList[1]}.`;
  } else if(nameList.length > 2) {
    for (let i = 0; i < nameList.length - 1; i++) {
      message = message + `${nameList[i]}, `;
    }
    message = message + `and ${nameList[nameList.length - 1]}.`;
  }
  return message;
}

const handleNameList = (nameList) => {
  let message = 'Hello, ';
  let normalName = nameList.filter((item) => {
    return name !== name.toUpperCase()
  })
  let ShoutedName = nameList.filter((item) => {
    return name === name.toUpperCase()
  })

  if (nameList.length === 1) {
    return message + `${nameList[0]}.`;
  } else if (nameList.length === 2) {

    return message = message + `${normal[0]} and ${nameList[1]}.`;

  } else if(nameList.length > 2) {
    for (let i = 0; i < nameList.length - 1; i++) {
      message = message + `${nameList[i]}, `;
    }
    message = message + `and ${nameList[nameList.length - 1]}.`;
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

