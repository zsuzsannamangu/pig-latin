function pigLatinWord(word){

  var vowels = ["a", "e", "i", "o", "u"];
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];



  if (typeof word === "number") {
    return false;
  } else if (vowels.includes(word[0])) {
    return word.concat("way");
  } else if (consonants.includes(word[0])) {
    return word.slice(1)+word.slice(0,1)+"ay";
  } else if (consonants.includes(word[0]) && consonants.includes(word[1])) {
    return word.slice(2)+word.slice(0,2)+"ay";
  } else {
    return error;
  }
}


console.log(
  pigLatinWord(1))

console.log(
  pigLatinWord('izza'),
  pigLatinWord('izza') === 'izzaway'
)

console.log(
  pigLatinWord('pizza'),
  pigLatinWord('pizza') === 'izzapay'
)

console.log(
  pigLatinWord('smizza'),
  pigLatinWord('smizza') === 'izzasmay'
)

// var romanNumber = new Array();
//    romanNumber = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
//
// var decimalNumber = new Array();
//    decimalNumber = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
//    function decimalRoman(value) {
//       if (value <= 0 || value >= 4000)
//          return false;
//       for (var i = 0; i<romanNumber.length; i++) {
//          while (value >= decimalNumber[i]) {
//             value -= decimalNumber[i];
//             romanNumeral += romanNum[i];
//
//









// business logic
// var english = function(engInput) {
  // if((engInput === vowels) || (engInput === consonants)) {
  //   return true;
  // } else
  //   return false;
  // };

// var vowels = ["a", "e", "i", "o", "u"];
// var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
// var alphabet = ["a", "e", "i", "o", "u", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
//
// function isAVowel(letter) {
//   for (var i = 0; i  < english.length; i++) {
//     if (letter === vowels[i]) return true;
//   }
//   return false;
// }
// var i = 0;
//
// function isANumber(number) {
//   for (var i = 0; i < english.length; i++) {
//     if (number!==alphabet[i]) return true;
//   } return true;
// }

// if(engInput[index] === vowels) {
//   //add "way" to the end
//   english.concat("way");
// } else
//
// if(engInput[index] != vowels) {
//   //remove first letter to the end
//   english.substr(1)+english.substr(0,1)+"ay";
// }

// user interface logic
// $(function() {
//   $("form#enterEnglish").submit(function(event) {
//     event.preventDefault();
//     english = $("#english").val();
//     i = 0;
//     if (isAVowel(english[i])) {
//       //add "way" to the end for words beginning with vowels
//       $(".translation").text(english.concat("way"));
//     } else if (consonants.includes(english[i])) {
//       $(".translation").text(english.slice(1)+english.slice(0,1)+"ay");
//     } else {
//      return english;
//     }
//
//     $("#result").show();
//   });
//
// });


    //
    // if (consonants.includes(english[index])) {
    //   $(".translation").text(english.substr(1)+english.substr(0,1)+"ay");
    // } else if (english.includes(vowels) || english.includes(consonants)){
    //   return false;
    //   alert("enter only words");
    // } else {
    //   alert("error");



// if (english.includes(vowels) || english.includes(consonants))
    // if (vowels.includes(english[index])){
    //   english.concat("way");
    // }
