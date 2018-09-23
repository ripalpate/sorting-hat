const house = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const getStartedButtonElem = document.getElementById('start-button');
let counter = 0;

// function for print to DOM
const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML += stringToPrint;
  }

// function to display student form
const buildNewStudentForm = () => {
    let domString =`<div class=" w-75 m-auto student-form">
                        <div class="form-group mb-5 ml-5">
                            <h3 class="form-header">Enter First Year's Name</h3>
                        </div>
                        <form class="form-inline d-flex justify-content-center">
                            <p class="h4 mr-4">Student:</p>
                            <div class="form-group mb-2">
                                <label class="sr-only">Student</label>
                            </div>
                            <div class="form-group mx-sm-3 mb-2">
                                <input type="text" class="form-control mr-5" id="student-input" placeholder="Name">
                            </div>
                            <button type="submit" class="btn btn-primary mb-2 ml-3 pr-5 pl-5 btn-info" id="sort-button">Sort!</button>
                        </form>
                    </div>`
    printToDom(domString, 'student-form');
}

// function to print Student Card
const buildStudentCard = () => {
    const studentInput = document.getElementById("student-input").value; 
    // collect random house variable
    const randHouse = house[Math.floor(Math.random()*house.length)];
    let cardString = `<div class="card m-2 student-card ${randHouse}">
                        <div class="card-body">
                            <h5 class="card-title student-name">${studentInput}</h5>
                            <p class="card-text">${randHouse}</p>
                            <button href="#" class="btn btn-danger pr-5 pl-5 expelButton">Expel</button>
                        </div>
                      </div>`;
    counter++;
    printToDom(cardString, 'student-card');
}

//function to reset the Student form
const resetStudentform = () => {
  document.getElementById('student-input').value ='';
}

// function for assigning student card with sort button event listener
const assignStudentCard =() => {
    const sortButtonElem = document.getElementById('sort-button');
    sortButtonElem.addEventListener('click', (e) => {
        e.preventDefault();
        const studentInput = document.getElementById("student-input").value; 
        if(!studentInput){
            alert('Please enter student name.');
        } else {
            buildStudentCard();
        }
        resetStudentform();
        activateExpel();
    });
}

//function to delete Student Card
const activateExpel = () => {
    const expelButtons = document.getElementsByClassName('expelButton');  
    for (let i = 0; i < expelButtons.length; i++) {
      const buttonElem = expelButtons[i];
      buttonElem.addEventListener("click", (e) => {
        // remove card that the button was on
        const buttonClicked = e.target;
        const cardToExpel = buttonClicked.parentNode.parentNode;
        cardToExpel.remove();
      })
    }
  }

// Event Listener for Get Started button
getStartedButtonElem.addEventListener("click", (e) => { 
    e.preventDefault();
    buildNewStudentForm();
    assignStudentCard();
}
);



