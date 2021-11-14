import {
  capitalize,
  makeLowerCase,
  noSpace,
  addSpace,
  translateLabel,
  removeText,
  toNumber,
  addDash,
} from "./sanitize.js";
import { update, remove } from "./update.js";
import { filter } from "./filter.js";
import { title } from "./title.js";

d3.json(
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=pornstar"
).then((data) => {
  const ingredients = [];
  const measure = [];

  data.drinks.forEach((obj) => {
    const firstIngr = obj["strIngredient1"];
    const secondIngr = obj["strIngredient2"];
    const thirdIngr = obj["strIngredient3"];
    const fourthIngr = obj["strIngredient4"];
    const fifthIngr = obj["strIngredient5"];

    const firstMeasure = obj["strMeasure1"];
    const secondMeasure = obj["strMeasure2"];
    const thirdMeasure = obj["strMeasure3"];
    const fourthMeasure = obj["strMeasure4"];
    const fifthMeasure = obj["strMeasure5"];

    ingredients.push(firstIngr, secondIngr, thirdIngr, fourthIngr, fifthIngr);
    measure.push(
      firstMeasure,
      secondMeasure,
      thirdMeasure,
      fourthMeasure,
      fifthMeasure
    );
  });

  const stringNumber = removeText(measure);
  const measureNumber = toNumber(stringNumber);
  const dashedIngridient = addDash(ingredients);

  const newData = [
    {
      type: `${dashedIngridient[0]}`,
      value: measureNumber[0],
      color: "#581845",
    },
    {
      type: `${dashedIngridient[1]}`,
      value: measureNumber[1],
      color: "#C70039",
    },
    {
      type: `${dashedIngridient[2]}`,
      value: measureNumber[2],
      color: "#FFC300",
    },
    {
      type: `${dashedIngridient[3]}`,
      value: measureNumber[3],
      color: "#DAF7A6",
    },
    {
      type: `${dashedIngridient[4]}`,
      value: measureNumber[4],
      color: "#FF5733",
    },
  ];

  title(data.drinks[0].strDrink);

  const width = 300;
  const height = 500;

  // filyer

  filter(newData);

  // laad de svg in

  d3.xml("../images/cocktail.svg").then((data) => {
    d3.select(".svg").node().append(data.documentElement);
    d3.select("svg").attr("width", width).attr("height", height);
  });

  d3.selectAll(".filter-us-only").on("change", function () {
    const checked = d3.select(this).property("checked");
    const name = d3.select(this).property("name");
    const filteredData = newData.filter((d) => d.type === name);
    if (checked === true) {
      update(filteredData);
    } else {
      remove(filteredData);
    }
  });
});
