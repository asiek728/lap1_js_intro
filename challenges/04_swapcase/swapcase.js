const swapcase = input => {
    let new_word = '';
    for (let i = 0; i < input.length; i++) {
      input[i] ===  input[i].toUpperCase() ? new_word += input[i].toLowerCase() : new_word += input[i].toUpperCase();
    }
    return new_word
}

// Do not delete the code below 🙏

module.exports = {
  swapcase
}
