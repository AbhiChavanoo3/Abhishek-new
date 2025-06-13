function findDuplicates (array) {
  const seen = new Set();
  const duplicates = array.filter(item => {
    if (seen.has(item)) {
      return true;
    } else {
      seen.add(item);
      return false;
    }
  });
  return [...new Set(duplicates)]; 
}
const result = findDuplicates([7,7,3,3,5,5,2,4,6]);
console.log(result); 
