// Schoonmaak functies, voor het schoonmaken van de data

const removeText = (array) => {
  const emptyArray = []; // maakt een lege array aan

  array.forEach((str) => {
    // voor elk object in de array doen we het volgende
    const firstLetter = str.charAt(0); // pakt de eerste letter van een zin en stopt die in firstLetter
    emptyArray.push(firstLetter); // stopt firstLetter in de lege array
  });

  return emptyArray; // returned de data
};

const toNumber = (array) => {
  const emptyArray = []; // maakt een lege array aan

  array.forEach((str) => {
    const number = parseInt(str); // zet de string om naar een nummer en stopt deze in number
    emptyArray.push(number); // stopt number in de lege array
  });

  return emptyArray; // returned de data
};

const addDash = (array) => {
  const emptyArray = []; // maakt een lege array aan

  array.forEach((str) => {
    const addDash = str.replaceAll(" ", "-"); // veranderd alle spaties naar een - en stopt deze in addDash
    emptyArray.push(addDash); // stopt addDash in de lege array
  });

  return emptyArray; // returned de data
};

export { removeText, toNumber, addDash }; // exporteert alle functies
