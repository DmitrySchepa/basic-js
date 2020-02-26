module.exports = function createDreamTeam(members) {
  if (members instanceof Array) {
  let arr2 = members.filter(function(elem) {
    if (typeof elem === 'string') {
      return elem;
    }
  });
  let arr3 = [];
  for (let i of arr2) {
    arr3.push(i.trim().charAt(0).toUpperCase());
  }
  return arr3.sort().join('');
}
return false;
};