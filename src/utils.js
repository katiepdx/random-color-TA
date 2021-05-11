const getRandomColor = (colors) => {
  const randomIndex = Math.floor(Math.random() * 10);
  const randomColor = colors[randomIndex];

  return randomColor;
};

module.exports = {
  getRandomColor
};
