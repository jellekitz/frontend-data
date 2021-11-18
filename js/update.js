const update = (new_data) => {
  // maakt een group aan binnen .data-container met de class "data-group" en id "type ingridient".
  const g = d3
    .select(".data-container")
    .append("g")
    .attr("class", "data-group")
    .attr("id", new_data[0].type);

  // selecteer binnen de group alle "rects", daar geven we de data aan mee.
  g.selectAll("rect")
    .data(new_data)
    .join((enter) => {
      // wanneer de enter functie word aangeroepen dan appenden we de "rect" elementen binnen de group (rect bepaald de height van de group).
      const rect_enter = enter.append("rect");
      rect_enter.append("p").text((d) => d.value + " cl"); // binnen in de rect voegen we een paragraph mee met als text de value van het object binnen de meegegeven array. + uiteraard de cl
      return rect_enter;
    })
    .transition()
    .style("background", (d) => d.color) // de kleur die staat beschreven in de meegegeven array bepaald de kleur van het object.
    .attr("class", "data")
    .attr("id", (d) => d.type)
    .style("height", (d) => d.value * 12 + "px"); // de value doen we x12 aangezien de echte value niet te zien zou zijn.
};

// wanneer remove word aangeroepen dan verwijderen we als eerst de rect binnen de group zodat we eerst een transitie te zien krijgen. Vervolgens verwijderen we ook de group om het rect element heen.
const remove = (new_data) => {
  d3.select(`#${new_data[0].type}`)
    .select("rect")
    .transition()
    .style("height", "0px")
    .remove();

  d3.select(`#${new_data[0].type}`).transition().delay(0).remove();
};

export { update, remove }; // hier exporteren we de update en remove function
