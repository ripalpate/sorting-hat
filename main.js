const getStartedButtonElem = document.getElementById('start-button');

// function for print to DOM
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
}

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
                            <label for="inputPassword2" class="sr-only">Password</label>
                            <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary mb-2">Sort!</button>
                        </form>
                    </div>`
    printToDom(domString, 'student-form');
}
getStartedButtonElem.addEventListener("click", (e) => { 
    e.preventDefault();
    buildNewStudentForm();
}
)
