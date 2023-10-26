const evens = (arr) => {
  let array = arr.filter(number => {
    return number % 2 === 0;
  });

  return array;
}

// Do not delete the code below 🙏

module.exports = {
  evens
}
