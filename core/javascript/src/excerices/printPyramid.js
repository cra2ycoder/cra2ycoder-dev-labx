function printPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = '*'.repeat(2 * i - 1)
    let spaces = ' '.repeat(rows - i)
    console.log(spaces + stars)
  }
}

printPyramid(5)
