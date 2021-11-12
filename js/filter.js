const filter = (new_data) => {
  d3.select(".filter")
    .selectAll("label")
    .data(new_data)
    .enter()
    .append("label")
    .text((d) => d.type)
    .append("input")
    .attr("type", "checkbox")
    .attr("name", (d) => d.type)
    .attr("class", "filter-us-only");
};

export { filter };
