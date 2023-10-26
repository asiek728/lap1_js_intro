const reverse1 = (word) => {
  let new_word = '';
  for (let i = word.length-1; i >= 0 ; i--) {
    new_word += word[i];
  }
  return new_word
}

// Do not delete the code below 🙏

module.exports = {
  reverse1
}
