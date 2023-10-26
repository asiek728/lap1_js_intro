const hello = (name = "Stranger") => {
  if (name.length === 0) {
    throw new Error('no empty strings allowed');
  }
  else {
      return ("Hello " + name);
  }
}


// Do not delete the code below 🙏

module.exports = {
  hello
}
