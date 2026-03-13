function createSelectBox(startYear, endYear) {
  console.log(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.writeln(`<option value="${i}">`);
    document.writeln(`${i}`);
    document.writeln(`</option>`);
  }
  document.writeln(`</select>`);
}
createSelectBox(2000, 2021);
