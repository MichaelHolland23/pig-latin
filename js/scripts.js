$(document).ready(function() {
  $("#latin").submit(function(event){
    event.preventDefault();
    var sentence = ($("#userText").val().toUpperCase());
    var sentence2 = sentence.split(" ");
    var translatedSentence=[];

    for (index = 0; index < sentence2.length; index +=1)   {
      word=sentence2[index];
      var brokenWord =word.split("");
      letter=brokenWord.shift();


        //insert if here to make sure its a letter//

        //the if below identifies its not a vowel//
       if (letter != 'A' && letter !='E' && letter !='I' && letter !='O' && letter !='U') {
        letter = letter.concat("AY");
        alert(letter);
      }


    }
  });
});


//we will want join
