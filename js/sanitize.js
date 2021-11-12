// Schoonmaak functies, voor het schoonmaken van de data

const capitalize = (str) => {
  const firstLetter = str.charAt(0);
  const cap = firstLetter.toUpperCase();

  const full = str;
  const slice = full.slice(1);

  const together = cap + slice;

  return together;
};

const makeLowerCase = (str) => {
  return str.toLowerCase();
};

const noSpace = (str) => {
  return str.replace(". ", ".");
};

const addSpace = (str) => {
  return str.replace("&", " & ");
};

const translateLabel = (str) => {
  return str.replace("alcoholic", "alcohol").replace("non", "geen");
};

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

export {
  capitalize,
  makeLowerCase,
  noSpace,
  addSpace,
  translateLabel,
  removeText,
  toNumber,
};
