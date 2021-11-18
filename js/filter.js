const filter = (new_data) => {
  d3.select(".filter").append("p").text("Inhoud van Cocktail: "); // toevoegen van een paragraph.

  const valueArray = []; // maken een lege array aan waar we zo direct data in gaan stoppen.

  // voor elke object in de meegegeven array pakken we de value.
  new_data.forEach((obj) => {
    const values = obj.value;

    valueArray.push(values); // de value stoppen we vervolgens in de valueArray.
  });

  // hieroner maken we een som van alle values bij elkaar opgeteld + we geven hier een string aan mee op het einde.
  const sum =
    valueArray[0] +
    valueArray[1] +
    valueArray[2] +
    valueArray[3] +
    valueArray[4] +
    " cl";

  d3.select(".filter").data(new_data).append("p").text(sum); // we displayen de som in een nieuwe paragraph.

  d3.select(".filter").append("h2").text("Ingrediënten"); // maken een titel aan.

  // hier selecteren we de .filter section en voegen we met de meegegeven data labels weer voor elk object.
  d3.select(".filter")
    .selectAll("label")
    .data(new_data)
    .join("label")
    .append("input") // in elk label voegen we een input toe.
    .attr("type", "checkbox")
    .attr("name", (d) => d.type)
    .attr("class", "filter-us-only");

  // binnen de labels voegen we een div toe met daarin de naam van het ingredient.
  d3.selectAll("label")
    .append("div")
    .attr("class", "text")
    .text((d) => d.type);

  // we voegen ook nog een div toe met de aangegeven kleur (als background-color) in de array.
  d3.selectAll("label")
    .append("div")
    .attr("class", "color")
    .style("background-color", (d) => d.color);
};

export { filter }; // we exporteren de filter functie
