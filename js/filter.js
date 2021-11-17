const filter = (new_data) => {
  d3.select(".filter").append("p").text("Inhoud van Cocktail: ");

  const valueArray = [];

  new_data.forEach((obj) => {
    const values = obj.value;

    valueArray.push(values);
  });

  const sum =
    valueArray[0] +
    valueArray[1] +
    valueArray[2] +
    valueArray[3] +
    valueArray[4] +
    " cl";

  d3.select(".filter").data(new_data).append("p").text(sum);

  d3.select(".filter").append("h2").text("Ingrediënten");

  d3.select(".filter")
    .selectAll("label")
    .data(new_data)
    .join("label")
    .append("input")
    .attr("type", "checkbox")
    .attr("name", (d) => d.type)
    .attr("class", "filter-us-only");

  d3.selectAll("label")
    .append("div")
    .attr("class", "text")
    .text((d) => d.type);

  d3.selectAll("label")
    .append("div")
    .attr("class", "color")
    .style("background-color", (d) => d.color);
};

export { filter };
