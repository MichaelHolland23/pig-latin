$(document).ready(function() {
  $("#latin").submit(function(event){
    event.preventDefault();
    var sentence = ($("#userText").val().toUpperCase());
    var sentence2 = sentence.split(" ");
    var translatedSentence=[];

    for (index = 0; index < sentence2.length; index +=1) {
      word=sentence2[index];
      var brokenWord =word.split("");
      letter=brokenWord[0];
        //insert if here to make sure its a letter//
        //the if below identifies its not a vowel//
        if (sentence.search(/\u0020[^a-zA-Z]+/) === -1) {
          if (letter==="Q"){
            newLetter="QUAY";
            bw=brokenWord.splice(2,3);
            brokenWord=bw;
          }
            else if (letter != 'A' && letter !='E' && letter !='I' && letter !='O' && letter !='U') {
            letter=brokenWord.shift();
            newLetter = letter.concat("AY");
            } else {
            newLetter = "WAY";
          }
            // var reporting = function() {
             newWord = brokenWord.concat(newLetter);
             newWordString=newWord.join("");
             $("#results").append("<p>" + newWordString + "</p>");
    //  document.getElementById('form1').className += 'hidden';
          // }
};
};
});
});



//we will want join
///^[a-zA-Z]*$/
