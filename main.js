const house = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const getStartedButtonElem = document.getElementById('start-button');
let counter = 0;

// function for print to DOM
const printToDom = (stringToPrint, divId) => {
    document.getElementById(divId).innerHTML += stringToPrint;
  }

// function to display student form
const buildNewStudentForm = () => {
    let domString =`<div class="border border-light rounded bg-light">
                        <div class="form-group mb-5">
                            <h3>Enter First Year's Name</h3>
                        </div>
                        <form class="form-inline">
                            <p class="h4">Student:</p>
                        <div class="form-group mb-2">
                            <label for="staticEmail2" class="sr-only">Student</label>
                        </div>
                        <div class="form-group mx-sm-3 mb-2">
                            <input type="text" class="form-control" id="student-input" placeholder="Name">
                        </div>
                        <button type="submit" class="btn btn-primary mb-2" id="sort-button">Sort!</button>
                        </form>
                    </div>`
    printToDom(domString, 'student-form');
}

// function to print Student Card
const buildStudentCard = () => {
    const studentInput = document.getElementById("student-input").value; 
    // collect random house variable
    const randHouse = house[Math.floor(Math.random()*house.length)];
    let cardString = `<div class="card w-25 m-2 ">
                        <div class="card-body">
                            <h5 class="card-title">${studentInput}</h5>
                            <p class="card-text">${randHouse}</p>
                            <button href="#" class="btn btn-danger expelButton">Expel</button>
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
        buildStudentCard();
        resetStudentform();
    });
}

// Event Listener for Get Started button
getStartedButtonElem.addEventListener("click", (e) => { 
    e.preventDefault();
    buildNewStudentForm();
    assignStudentCard();
}
);


