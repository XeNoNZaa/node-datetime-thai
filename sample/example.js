
require('./../dist/dtthai.js');

var Now = new Date();
var thai_pattern = Now.getThaiPattern();

console.log('Method', 'getThaiDay', Now.getThaiDay());
console.log('Method', 'getThaiFullDay', Now.getThaiFullDay());

console.log('Method', 'getThaiMonth', Now.getThaiMonth());
console.log('Method', 'getThaiFullMonth', Now.getThaiFullMonth());

console.log('Method', 'getThaiYear', Now.getThaiYear());
console.log('Method', 'getThaiFullDay', Now.getThaiFullDay());

console.log('Method', 'toThaiString minimal', Now.toThaiString(thai_pattern.minimal));
console.log('Method', 'toThaiString partial', Now.toThaiString(thai_pattern.partial));
console.log('Method', 'toThaiString maximum', Now.toThaiString(thai_pattern.maximum));
console.log('Method', 'toThaiString minimal', Now.toThaiString(1));
console.log('Method', 'toThaiString partial', Now.toThaiString(2));
console.log('Method', 'toThaiString maximum', Now.toThaiString(3));

console.log('Method', 'getThaiShortTime', Now.getThaiShortTime());
console.log('Method', 'getThaiFormalShortTime', Now.getThaiFormalShortTime());
console.log('Method', 'getThaiFormalLongTime', Now.getThaiFormalLongTime());
