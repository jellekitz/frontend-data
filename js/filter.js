const filter = (new_data) => {
  d3.select(".filter")
    .selectAll("label")
    .data(new_data)
    .enter()
    .append("label")
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
