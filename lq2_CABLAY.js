//I. Code Transformation
//I.1.a Conditional Statement into Conditional Ternary
let genAverage = 95;
let age = 19;
age >= 18 && genAverage ? console.log("You may enter College, under BSCS Program") : console.log("Both conditions may have not met and not allowed to enroll");

//I.1.b Conditional Statement into Conditional Ternary
let subject = "DSA";
let grade = 93;
subject === "DSA" && grade >= 80 ? console.log("You may enroll Application Development") : subject === "Math101" && grade <= 80 ? console.log("You may enroll Calculus") : console.log("You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus");

//I.2.a Conditional Ternary into Regular Conditional Statement
let legalAge = 19;
if(legalAge >= 18) {
    console.log("You may now Register as a Voter for Elections 2025");
} else {
    console.log("You are too young to register as a Voter for Elections 2025")
}

//I.2.b Conditional Ternary into Regular Conditional Statement
let average = 94;
if(average >= 85) {
    console.log("You may enroll in all Course Programs");
} else if (average < 85 && average > 82) {
    console.log("You may enroll in any Course Program except in CTE, SCJE, CHS");
} else {
    console.log("You may enroll in any Course Program except in CTE, SCJE, CHS, CCS");
}

//II. Code Snippet
//adding this prompt-sync to prompt the username and passcode
const ps = require("prompt-sync");
const kprompt = ps();

let passcode = "ilovedsa";
let username = "kaiixla";
const usName = kprompt("Register your Username: ");//declare a var that will hold the uname, use a user input method
const pCode  = kprompt("Register your passcode: "); //declare a var that will hold the pword, use a user input methodc
const repCode = kprompt("Re-enter your passcode: "); //declare a variable that will hold the re-pword, use a user input method
    if (pCode === passcode) { //compare the Registered Password and Re-entered Password
        console.log("Congratulations! You entered a correct passcode."); //window Pop-up to Congratulate the user for registering.
            const uName = kprompt("Username: "); //declare a variable that will hold the uname on LogIn
                if (username === uName){ //compare the registered uname and entered uname on LogIn
                    const paCode = kprompt("Password: "); //if correct uname, declare a var that will hold the encoded password on LogIn
                (paCode === passcode) //compare the registered pword and entered pword on LogIn
                    ? console.log("Welcome to DSA, " + username): //window Pop-up to Congratulate the user for successful LogIn.
                    console.log("Incorrect Password, Re-run the code!"); //window Pop-up to Inform the user of the incorrect passcode    
                    } 
                else {
                    console.log("Incorrect Username, Re-run the code!"); //window Pop-up to Inform the user of the incorrect username
                }
            } else {
                    console.log("Password does not Match, Re-run the code!"); //window Pop-up to Inform theregpCode and re-entered pCode does not match
                    }

//III. Coding Problem
//adding this prompt-sync to prompt the username and passcode
const ps = require("prompt-sync");
const prompt = ps();             

//making a variables for the class roles
let Officer = "Officer";
let Student = "Student";
let Teacher = "Teacher";

//prompting the name, address, age, class roles, and course
let kName = prompt("Enter your name: ");
let kAddress = prompt("Enter your address: ");
let kAge = parseInt(prompt("Enter your age: "));
let kCRoles = prompt("Enter your class role (Officer, Student, Teacher): ");
let kCourse = prompt("Enter your course (BSCS, BSM, BAEL): ");

//using statements to match the cases with the specific value
switch (kCourse) {
    //case for BSCS Course
    case "BSCS":
        alert("You are enrolled in Bachelor of Science in Computer Science.");

        if (kCRoles === Officer) {
            for (let i = 0; i < kAge / 4; i++)
{
            alert(kName + " - " + Officer);
            }
        } else if (kCRoles === "Student") {
            for (let i = 0; i < kAge / 4; i++)
{
            alert(kName + " - " + Student);
            }
        } else if (kCRoles === "Teacher") {
            for (let i = 0; i < kAge / 4; i++)
{
            alert(kName + " - " + Teacher);
            }
        } else {
            for (let i = 0; i < kAge / 4; i++)
{
            //if the student input a non-exsistent class role it will display the default role which is the student
            alert(kName + " - Student");
            }
        }
        break;
        //case for BSM course
    case "BSM":
        alert("You are enrolled in Bachelor of Science in Midwifery.");

        if (kCRoles === Officer) {
            for (let i = 0; i < kAge / 4; i++)
{
                alert(kName + " - " + Officer);
            }
        } else if (kCRoles === "Student") {
            for (let i = 0; i < kAge / 4; i++)
{
                alert(kName + " - " + Student);
            }
        } else if (kCRoles === "Teacher") {
            for (let i = 0; i < kAge / 4; i++)
{
                 alert(kName + " - " + Teacher);
            }
        } else {
            for (let i = 0; i < kAge / 4; i++)
{
            //if the student input a non-exsistent class role it will display the default role which is the student
            alert(kName + " - Student");
            }
        }
        break;
        //case for BAEL course
    case "BAEL":
        alert("You are enrolled in Bachelor of Arts in English Language.");

        if (kCRoles === Officer) {
            for (let i = 0; i < kAge / 4; i++)
{
            alert(kName + " - " + Officer);
            }
        } else if (kCRoles === "Student") {
            for (let i = 0; i < kAge / 4; i++)
{
            alert(kName + " - " + Student);
            }
        } else if (kCRoles === "Teacher") {
            for (let i = 0; i < kAge / 4; i++)
{
            alert(kName + " - " + Teacher);
            }
        } else {
            for (let i = 0; i < kAge / 4; i++)
{
            //if the student input a non-exsistent class role it will display the default role which is the student
            alert(kName + " - Student");
            }
        }
        break;
    default:
            alert(kName + " Course not recognized. Please enter BSCS, BSM or BAEL.");
}
