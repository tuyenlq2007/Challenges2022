
//**19. Accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.**
const number = 1025468;

function insert_dashes(number){
  var arrayOfNumber = number.toString().split('');
  var stringOfa='';
  arrayOfNumber.forEach(num=>num%2===0 ? stringOfa=stringOfa+'-'+num : stringOfa );
  return stringOfa;
}
// Log to console
console.log("19. insert_dashes");
console.log(insert_dashes(number));
console.log(insert_dashes(number).slice(1));//0-2-4-6-8
