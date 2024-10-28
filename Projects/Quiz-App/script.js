document.getElementById('next-btn').addEventListener('click',function(){
fetch("https://opentdb.com/api.php?amount=15&category=19&difficulty=medium")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    document.getElementById('next-btn').style.visibility = "hidden";
    const questions = data.results;
    let currentQuestion = 0;

    function displayQuestion() {
      if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        document.getElementById('question').innerHTML = `Q${currentQuestion +   1}: ${question.question}`;
       if(question.type == "boolean")
       {  
           document.getElementById('boolean').innerHTML = '<input type="radio" id="true" name="answer" value="true"><label for="true">TRUE</label> <input type="radio" id="false" name="answer" value="false"><label for="false">FALSE</label><br></br>'     

      }
       else{
        document.getElementById('boolean').innerHTML ='<input type="radio" id="html" name="fav_language" value="HTML"><label for="html">HTML</label><br><input type="radio" id="css" name="fav_language" value="CSS"><label for="css">CSS</label><br><input type="radio" id="javascript" name="fav_language" value="JavaScript"><label for="javascript">JavaScript</label><br/> <input type="radio" id="javascript" name="fav_language" value="JavaScript"><label for="javascript">JavaScript</label>'
       }
        
        currentQuestion++;
      } else {
        clearInterval(questionInterval);
        console.log("All questions displayed!");
      }
    }

    displayQuestion();
    const questionInterval = setInterval(displayQuestion, 1000);
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
})  