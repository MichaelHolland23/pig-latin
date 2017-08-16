$(document).ready(function() {
  $("#latin").submit(function(event){
    event.preventDefault();
    var sentence = ($("#userText").val().toUpperCase());
    var sentence2 = sentence.split(" ");
    var translatedSentence=[];

    for (index = 0; index < sentence2.length; index +=1)   {
      word=sentence2[index];
      var brokenWord =word.split("");
      letter=brokenWord[0];
      letter=letter.toString();

        if (sentence.search(/\u0020[^a-zA-Z]+/) === -1) {
            if (letter != 'A' && letter !='E' && letter !='I' && letter !='O' && letter !='U') {
            letter=brokenWord.shift();
            newLetter = letter.concat("AY");
            var reporting = function() {
            newWord = brokenWord.concat(newLetter);
            newWordString=newWord.join("");
            alert(newWordString);
          }
          } else {
            newLetter = letter.concat("WAY");
            alert()
            var reporting = function() {
            newWord = brokenWord.concat(newLetter);
            newWordString=newWord.join("");
            alert(newWordString);
          }
          }

};
};
});
});



//we will want join
///^[a-zA-Z]*$/
