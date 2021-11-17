// Schoonmaak functies, voor het schoonmaken van de data

const removeText = (array) => {
  const emptyArray = [];

  array.forEach((str) => {
    const firstLetter = str.charAt(0);
    emptyArray.push(firstLetter);
  });

  return emptyArray;
};

const toNumber = (array) => {
  const emptyArray = [];

  array.forEach((str) => {
    const number = parseInt(str);
    emptyArray.push(number);
  });

  return emptyArray;
};

const addDash = (array) => {
  const emptyArray = [];

  array.forEach((str) => {
    const addDash = str.replaceAll(" ", "-");
    emptyArray.push(addDash);
  });

  return emptyArray;
};

export { removeText, toNumber, addDash };
