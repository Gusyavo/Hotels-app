// Function that deletes duplicate values for the same key in an array of objects

export const parametersExtractor = (array, value) => {
  const values = array.map(object => object[value])
  const valuesSet = new Set(values);
  const filteredValues = [...valuesSet];

  const sortedValues = filteredValues.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  })
  return sortedValues;
};
