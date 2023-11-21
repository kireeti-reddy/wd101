
// validations 
const email = document.getElementById('email');
        email.addEventListener('input', () => validation(email));
        function validation(key){
            let re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
            if(!re.test(email.value)){
                email.setCustomValidity("Invalid Email");
                email.reportValidity();
                event.preventDefault();
            }
            else{
                email.setCustomValidity("");
            }
        }

// DOB  



// Calculate the maximum DOB value
var maxDob = new Date();
maxDob.setFullYear(maxDob.getFullYear() - 18); // Set age limit to 18
var maxDobValue = maxDob.toISOString().split('T')[0]; // Format as yyyy-mm-dd

// Set the "max" attribute of the DOB input field
document.getElementById("dob").setAttribute("max", maxDobValue);

function calculateMinDobValue() {
    var currentDate = new Date();
    var minDobValue = new Date(currentDate.getFullYear() - 55, currentDate.getMonth(), currentDate.getDate());
    return minDobValue.toISOString().split('T')[0]; // Format as yyyy-mm-dd
   }
   
   var minDobValue = calculateMinDobValue();
   document.getElementById("dob").setAttribute("min", minDobValue);

//table

document.addEventListener("DOMContentLoaded", function() {
    let userform = document.getElementById("user-form");

    const retrieve_e = () => {
        let ent = sessionStorage.getItem("user-entries");
        if (ent) {
            ent = JSON.parse(ent);
        }
        else{
            ent = [];
        }
        return ent;
    } 

    let entries = retrieve_e();

    const display = () =>{
        const tableEntries = retrieve_e();
        const userEntries = document.getElementById("user-entries");
        userEntries.innerHTML = "";

        tableEntries.forEach(entry => {
            const tr = document.createElement("tr");
            Object.values(entry).forEach(value => {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td);
            });
            userEntries.appendChild(tr);
        });
    }

    display();

    const suf = (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const date = document.getElementById("dob").value;
        const terms = document.getElementById("check").checked;

        const entry = {
            name,
            email,
            password,
            date,
            terms
        };

        entries.push(entry);

        sessionStorage.setItem("user-entries", JSON.stringify(entries));
    }
    userform.addEventListener("submit", suf);
})