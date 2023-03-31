function startGame() {

  let userInputs = [];

  let questionArray = ["adjective", "name", "place", "noun", "adjective", "adjective", "name", "adjective"];

  // Function which validates the inputs
  function intreaba(intrebare) {
    let answer = prompt("Enter a/ an " + intrebare);
    if (answer === "" || answer === null) {
      alert("Please enter a value");
      return intreaba(intrebare);
    }
    if (!isNaN(answer)) {
      alert("Please enter a string not a number");
      return intreaba(intrebare);
    }
    return answer;
  }

  // Display prompt question for each element of the questionArray
  for (let i = 0; i < questionArray.length; i++) {
    let answer = intreaba(questionArray[i]);
    userInputs.push(answer);

    // Display in the console: the answer, how many questions answered, how many questions left
    console.log("you answer is: " + userInputs[i]);
    console.log("You answered: " + (i + 1) + " questions");
    console.log("You have: " + (questionArray.length - i - 1) + " questions left to answer");

    let originalStory = `It was a ${userInputs[0]} summer day. ${userInputs[1]} and I were 
    excited to go camping at ${userInputs[2]}. It was my first time going there. I packed my 
    favourite ${userInputs[3]}. On the road we went in our ${userInputs[4]} ${userInputs[5]} 
    car. We were listening to ${userInputs[6]} all the way down. The drive was about 5 hours but 
    it was ${userInputs[7]} it.`;

    // When no quesitons left to answer, alert this and display the story on the screen
    if (i == (questionArray.length - 1)) {
      alert("You answered all the questions. Let's read your story: ");

      let divStory = document.getElementById("story");
      divStory.textContent = originalStory;
    }
  }
}

// ORIGINAL STORY
// let orgStory = `It was a sunny summer day. Ana and I were excited to go camping at the
// mountain. It was my first time going there. I packed my favourite tracksuits. On the road
// we went in our gray big car. We were listening to Lady Gaga all the way down. The drive was
// about 5 hours but it was worth it.`; 