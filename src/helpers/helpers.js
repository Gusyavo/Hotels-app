// Function that deletes duplicate values for the same key in an array of objects

export const parametersExtractor = (array, value) => {
  const values = array.map(object => object[value])
  const valuesSet = new Set(values);
  const filteredValues = [...valuesSet];
  return filteredValues;
};
