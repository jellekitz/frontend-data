const title = (str) => {
  d3.select(".title-container").append("h1").text(str);
};

export { title };
