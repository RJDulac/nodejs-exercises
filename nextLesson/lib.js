//export function
module.exports = {

  someProperty: 'somevalue',
  //wrap function in module
  //assign function to property because we are inside an object
  cal: function(val1, val2) {
    return val1 + val2;
  }
};
