const upcase = (arr) => {
  let array = [];
  arr.forEach(letter => {
    array.push(letter.toUpperCase());
  })
  return array;
}

// Do not delete the code below 🙏

module.exports = {
  upcase
}
