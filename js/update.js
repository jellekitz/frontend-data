const update = (new_data) => {
  d3.select(".data-container")
    .append("g")
    .attr("class", "data-group")
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
    .style("width", "245px")
    .style("height", (d) => d.value * 10 + "px")
    .select("title")
    .text((d) => d.type);
};

const remove = () => {
  select(".data-group").remove();
};

export { update, remove };
