const sortNames = (arr) => {
  return arr.sort(function (i, j) {
    return i.toLowerCase().localeCompare(j.toLowerCase());
  });
}
// Do not delete the code below 🙏

module.exports = {
  sortNames
}
