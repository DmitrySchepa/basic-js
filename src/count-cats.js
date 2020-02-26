module.exports = function countCats(matrix) {
  let arr2 = [].concat(...matrix);
  return arr2.filter(function(elem) {
    if (elem === '^^') {
      return elem;
    }
  }).length;
  
 
};
