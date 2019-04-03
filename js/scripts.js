// business logic
// var english = function(engInput) {
//   if((engInput = vowels) || (engInput = consonants)) {
//     return true;
//   } else
//     return false;
//   };

var vowels = ["a", "e", "i", "o", "u"];
// var consonants != vowels;

var index = 0;

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
$(function() {
  $("form#enterEnglish").submit(function(event) {
    event.preventDefault();
    english = $("#english").val();
    index = 0;
    if (vowels.includes(english[index])) {
      //add "way" to the end
      $(".translation").text(english.concat("way"));
    } else if (english[index] != vowels) {
      //remove first letter to the end
      $(".translation").text(english.substr(1)+english.substr(0,1)+"ay");
    } else {
      return false;
    }

    $("#result").show();


    if (vowels.includes(english[index])){
      english.concat("way");
    }



  });


});
