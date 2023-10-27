const max = (arr) => {
  if (arr.length != 0) {
    return arr.reduce((i, j) => (i > j ? i : j));
  } 
}

// Do not delete the code below 🙏

module.exports = {
  max
}
