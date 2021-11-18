// we voegen een heading toe aan de section ".title-container".
const title = (str) => {
  d3.select(".title-container").append("h1").text(str);
};

export { title }; // exporteren de functie.
