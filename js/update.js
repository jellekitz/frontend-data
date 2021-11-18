const update = (new_data) => {
  const g = d3
    .select(".data-container")
    .append("g")
    .attr("class", "data-group")
    .attr("id", new_data[0].type);

  g.selectAll("rect")
    .data(new_data, (d) => d.type)
    .join((enter) => {
      const rect_enter = enter.append("rect");
      rect_enter.append("p").text((d) => d.value + " cl");
      return rect_enter;
    })
    .transition()
    .style("background", (d) => d.color)
    .attr("class", "data")
    .attr("id", (d) => d.type)
    .style("height", (d) => d.value * 12 + "px");
};

const remove = (new_data) => {
  d3.select(`#${new_data[0].type}`)
    .select("rect")
    .transition()
    .style("height", "0px")
    .remove();

  d3.select(`#${new_data[0].type}`).transition().delay(0).remove();
};

export { update, remove };
