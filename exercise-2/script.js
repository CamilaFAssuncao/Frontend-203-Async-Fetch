let output = document.getElementById("output");
let nameInput = document.getElementById('nameInput');
const actionButton = document.getElementById("actionButton");
const previousAnswers = [];

actionButton.addEventListener("click", predictName);

function predictName() {
  let name = nameInput.value;
  if (name !== '') {
    fetch('https://api.agify.io?name='+name,{ method:'GET'})
      .then(response => response.json())
      .then(data => {
        output.innerHTML = "I guess your age is " + data.age;
        output.style.display = 'block';
        previousAnswers.push(name + " is " + data.age  + " years old"); // Add the answer to previousAnswers array
        displayPreviousAnswers(); 
        console.log(data.age);
      })
      .catch(err => console.log(err));
  } else {
    output.style.display = 'none';
  }
}

nameInput.addEventListener("change", checkName);

function checkName() {
  let name = nameInput.value;
  if (name === '') {
    output.style.display = 'none';
  }
}

function displayPreviousAnswers() {
    const previousAnswersList = document.getElementById("previousAnswersList");
    previousAnswersList.innerHTML = '';
  
    previousAnswers.forEach(answer => {
      let li = document.createElement("li");
      let age = parseInt(answer.split(" is ")[1]); // Convert age to a number
      let message = "";
  
      // Add condition based on age range
      if (age < 18) {
        message = "and needs a fake ID to buy alcohol. &#127868";
      } else if (age >= 18 && age <= 29) {
        message = "and still doesn't know how bad a hangover can be.";
      } 
      else if (age > 29 && age <=50) {
        message = "and is aging like a fine wine."
      }
      else {
        message = "and is wise and experienced.";
      }
  
      li.textContent = answer + "  " + message;
      previousAnswersList.appendChild(li);
    });
  }
  
  