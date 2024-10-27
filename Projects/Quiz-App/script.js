        // Select elements
        const questionContainer = document.getElementById("question-container");
        const questionElement = document.getElementById("question");
        const answerButtons = document.getElementById("answer-buttons");
        const nextButton = document.getElementById("next-btn");
        const scoreContainer = document.getElementById("score-container");
        const scoreElement = document.getElementById("score");
        const timerElement = document.getElementById("time");
        
        // Variables
        let shuffledQuestions, currentQuestionIndex;
        let score = 0;
        let time = 10;
        let timer;
        
        // Questions array (can also be loaded from a JSON file)
        const questions = [
            {
                question: "What is the capital of France?",
                answers: [
                    { text: "Berlin", correct: false },
                    { text: "Madrid", correct: false },
                    { text: "Paris", correct: true },
                    { text: "Lisbon", correct: false }
                ]
            },
            // Add more questions as needed
        ];
        
        // Start quiz
        function startQuiz() {
            score = 0;
            time = 10;
            shuffledQuestions = questions.sort(() => Math.random() - 0.5); // Shuffle questions
            currentQuestionIndex = 0;
            scoreElement.innerText = score;
            setNextQuestion();
            startTimer();
        }
        
        // Set up next question
        function setNextQuestion() {
            resetState();
            showQuestion(shuffledQuestions[currentQuestionIndex]);
        }
        
        // Show question and answers
        function showQuestion(question) {
            questionElement.innerText = question.question;
            question.answers.forEach(answer => {
                const button = document.createElement("button");
                button.innerText = answer.text;
                button.classList.add("btn");
                if (answer.correct) button.dataset.correct = answer.correct;
                button.addEventListener("click", selectAnswer);
                answerButtons.appendChild(button);
            });
        }
        
        // Reset question and answers for next question
        function resetState() {
            clearStatusClass(document.body);
            while (answerButtons.firstChild) answerButtons.removeChild(answerButtons.firstChild);
        }
        
        // Timer function
        function startTimer() {
            timer = setInterval(() => {
                time--;
                timerElement.innerText = time;
                if (time === 0) {
                    clearInterval(timer);
                    currentQuestionIndex++;
                    if (currentQuestionIndex < shuffledQuestions.length) {
                        setNextQuestion();
                        time = 10;
                        startTimer();
                    } else {
                        showScore();
                    }
                }
            }, 1000);
        }
        
        // Select answer
        function selectAnswer(e) {
            const selectedButton = e.target;
            const correct = selectedButton.dataset.correct;
            if (correct) score++;
            scoreElement.innerText = score;
            clearInterval(timer);
            currentQuestionIndex++;
            if (currentQuestionIndex < shuffledQuestions.length) {
                time = 10;
                setNextQuestion();
                startTimer();
            } else {
                showScore();
            }
        }
        
        // Show final score
        function showScore() {
            questionContainer.classList.add("hidden");
            scoreContainer.classList.remove("hidden");
            nextButton.classList.add("hidden");
        }
        
        // Start quiz on load
        startQuiz();
// <!-- {"response_code":0,"results":[{"type":"boolean","difficulty":"medium","category":"Science: Computers","question":"All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine.","correct_answer":"False","incorrect_answers":["True"]},{"type":"multiple","difficulty":"medium","category":"Science: Computers","question":"What does AD stand for in relation to Windows Operating Systems? ","correct_answer":"Active Directory","incorrect_answers":["Alternative Drive","Automated Database","Active Department"]},{"type":"multiple","difficulty":"medium","category":"Science: Computers","question":"What was the name given to Android 4.3?","correct_answer":"Jelly Bean","incorrect_answers":["Lollipop","Nutella","Froyo"]},{"type":"multiple","difficulty":"medium","category":"Science: Computers","question":"Which of these programming languages is a low-level language?","correct_answer":"Assembly","incorrect_answers":["Python","C#","Pascal"]},{"type":"multiple","difficulty":"medium","category":"Science: Computers","question":"What is the number of keys on a standard Windows Keyboard?","correct_answer":"104","incorrect_answers":["64","94","76"]},{"type":"multiple","difficulty":"medium","category":"Science: Computers","question":"The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?","correct_answer":"Taiwan","incorrect_answers":["United States","Germany","China (People&#039;s Republic of)"]},{"type":"boolean","difficulty":"medium","category":"Science: Computers","question":"Linus Sebastian is the creator of the Linux kernel, which went on to be used in Linux, Android, and Chrome OS.","correct_answer":"False","incorrect_answers":["True"]},{"type":"boolean","difficulty":"medium","category":"Science: Computers","question":"FLAC stands for &quot;Free Lossless Audio Condenser&quot;&#039;","correct_answer":"False","incorrect_answers":["True"]},{"type":"multiple","difficulty":"medium","category":"Science: Computers","question":"What was the first Android version specifically optimized for tablets?","correct_answer":"Honeycomb","incorrect_answers":["Eclair","Froyo","Marshmellow"]},{"type":"multiple","difficulty":"medium","category":"Science: Computers","question":".rs is the top-level domain for what country?","correct_answer":"Serbia","incorrect_answers":["Romania","Russia","Rwanda"]},{"type":"multiple","difficulty":"medium","category":"Science: Computers","question":"What is known as &quot;the brain&quot; of the Computer?","correct_answer":"Central Processing Unit","incorrect_answers":["Motherboard","Graphics Processing Unit","Keyboard"]},{"type":"boolean","difficulty":"medium","category":"Science: Computers","question":"The open source program Redis is a relational database server.","correct_answer":"False","incorrect_answers":["True"]},{"type":"multiple","difficulty":"medium","category":"Science: Computers","question":"Which one of these is not an official development name for a Ubuntu release?","correct_answer":"Mystic Mansion","incorrect_answers":["Trusty Tahr","Utopic Unicorn","Wily Werewolf"]},{"type":"multiple","difficulty":"medium","category":"Science: Computers","question":"Which of the following is a personal computer made by the Japanese company Fujitsu?","correct_answer":"FM-7","incorrect_answers":["PC-9801","Xmillennium ","MSX"]},{"type":"multiple","difficulty":"medium","category":"Science: Computers","question":"What five letter word is the motto of the IBM Computer company?","correct_answer":"Think","incorrect_answers":["Click","Logic","Pixel"]}]} -->
        