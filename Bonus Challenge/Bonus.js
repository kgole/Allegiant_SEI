/**
Task #1
**/
const employeesArray = [{
    name: "Oscar Martinez",
    department: "Accounting"
}, {
    name: "Michael Scott",
    department: "Sales"
}, {
    name: "Jim Halper",
    department: "Sales"
}, {
    name: "Kevin Malone",
    department: "Accounting"
}, {
    name: "Dwight Schrute",
    department: "Sales"
}, {
    name: "Andy Bernard",
    department: "Sales"
}, {
    name: "Angela Martin",
    department: "Accounting"
}, {
    name: "Erin Hannon",
    department: "Reception"
}, {
    name: "Toby Flenderson",
    department: "Human Resources"
}, {
    name: "Stanley Hudson",
    department: "Sales"
}, {
    name: "Jan Levinson",
    department: "Corporate"
}, {
    name: "Creed Bratton",
    department: "Support"
}, {
    name: "Ryan Howard",
    department: "Temps and Interns"
}, {
    name: "Darryl Philbin",
    department: "Warehouse"
}, {
    name: "Holly Flax",
    department: "Human Resources"
}, {
    name: "Meredith Palmer",
    department: "Support"
}, {
    name: "Kelly Kapoor",
    department: "Support"
}, {
    name: "Gabe Lewis",
    department: "Human Resources",
    department2: "Temps and Interns"
}, {
    name: "Robert California",
    department: "Corporate"
}, {
    name: "Phyllis Vance",
    department: "Sales"
}, {
    name: "Roy Anderson",
    department: "Warehouse"
}, {
    name: "Peter Miller",
    department: "Support"
}, {
    name: "Clark Green",
    department: "Support"
}];

const remainingEmployeesArray = ["Jim Halpert", "Pam Beezley", "Kevin Malone", "Dwight Schrute", "Andy Bernard", "Angela Martin", "Erin Hannon", "Toby Flenderson", "Stanley Hudson", "Jan Levinson", "Creed Bratton", "Ryan Howard", "Darryl Philbin", "Holly Flax", "Meredith Palmer", "Kelly Kapoor", "Gabe Lewis", "Robert California", "Phyllis Vance", "Roy Anderson", "Peter Miller", "Clark Green"];
let firstNamesArray = [];
let lastNamesArray = [];
let departmentsCount = {};


//Task 2

processAllEmployees(employeesArray);

//Task 4
printOutFirstNames();

//Task 3
function processAllEmployees(allEmployees) {    
    for (i = 0; i < allEmployees.length; i++) {
        if (allEmployees[i].department != "Corporate" && allEmployees[i].department != "Human Resources") {
            firstNamesArray[i] = allEmployees[i].name.substr(0, allEmployees[i].name.indexOf(' '));
            lastNamesArray[i] = allEmployees[i].name.substr(allEmployees[i].name.indexOf(' '), allEmployees[i].length);
        }
    }

}

//Split is done programmatically in Task 3, so no need to implement this function here
function splitFullName(fullName) {

}

function incrementDepartmentCount(department) {
    for (i = 0; i < sizeof(allEmployees); i++) {
        
    }
}

function printOutFirstNames() {
    var i = 0;
    while (i < firstNamesArray.length) {
        if (firstNamesArray[i]) {
            console.log(firstNamesArray[i]);
        }
        i++;
    }
}