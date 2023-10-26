const add = (n1, n2) => {
  if (n1 === undefined && n2 === undefined) {
    throw new Error('you need to call the functions with 2 arguments');
  }
  else if (n2 === undefined) {
    return n1 + n1;
  }
  else {
    return n1 + n2;
  }
}

// Do not delete the code below 🙏

module.exports = {
  add
}
