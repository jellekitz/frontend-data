const update = (new_data) => {
  d3.select(".data-container")
    .append("g")
    .attr("class", "data-group")
    .attr("id", new_data[0].type)
    .selectAll("rect")
    .data(new_data, (d) => d.type)
    .join(
      (enter) => {
        const rect_enter = enter.append("rect");
        rect_enter.append("title");
        return rect_enter;
      },
      (update) => update,
      (exit) => {
        exit.remove();
      }
    )
    .transition()
    .style("background", (d) => d.color)
    .attr("class", "data")
    .attr("id", (d) => d.type)
    .style("height", (d) => d.value * 10 + "px")
    .select("title")
    .text((d) => d.type);
};

const remove = (new_data) => {
  d3.select(`#${new_data[0].type}`)
    .join((exit) => {
      exit.remove();
    })
    .remove();
};

export { update, remove };
