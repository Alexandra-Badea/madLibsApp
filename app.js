function startGame() {

    let userInputs = [];

    let numberOfQuestions = 8;
    let quesitonCounter = 0;  
        
    let questionArray = ["adjective", "name", "place", "noun", "adjective", "adjective", "name", "adjective"];
    

    let inputPrompt = "Enter a/ an ";

    for (let i = 0; i < questionArray.length; i++) {
        let answer = prompt("Enter a/ an " + questionArray[i]);

        userInputs.push(answer);

        quesitonCounter++;
        numberOfQuestions--;

        console.log("you answer is: " + userInputs[i]);
        console.log("You answered: " + quesitonCounter + " questions");
        console.log("You have: " + numberOfQuestions + " questions left to answer");

        let originalStory = `It was a ${userInputs[0]} summer day. ${userInputs[1]} and I were 
    excited to go camping at ${userInputs[2]}. It was my first time going there. I packed my 
    favourite ${userInputs[3]}. On the road we went in our ${userInputs[4]} ${userInputs[5]} 
    car. We were listening to ${userInputs[6]} all the way down. The drive was about 5 hours but 
    it was ${userInputs[7]} it.`;

        if (numberOfQuestions == 0) {
            alert("You answered all the questions. Let's read your story: ");

            let divStory = document.getElementById("story");
            divStory.textContent = originalStory;
            // console.log(originalStory);

        }
    }


}

// ORIGINAL STORY
// let orgStory = `It was a sunny summer day. Ana and I were excited to go camping at the 
// mountain. It was my first time going there. I packed my favourite tracksuits. On the road 
// we went in our gray big car. We were listening to Lady Gaga all the way down. The drive was 
// about 5 hours but it was worth it.`; 