
let habitsJSON = JSON.parse(localStorage.getItem("habits")) || [];

const inputName = document.getElementById("nameHabit");
const cb = document.getElementById("cbType");
//const category = document.getElementById("categoryHabits").value;
const btnSave = document.getElementById("btnSave");
const print = document.getElementById("print");
const clearAll = document.getElementById("btnClearAll");



function createHabit(name, doneState, category){
    return{
        type: name,
        done: doneState,
        category: category
    };
}

btnSave.addEventListener("click", function(){
    const habitName = inputName.value;
    const isTrue = cb.checked;
    const category = document.getElementById("categoryHabits").value;
    //cons = inputType.value;
    let exist = false;

    if(habitName === ""){
        alert("Please enter a habit name!");
        return;
    }

    const newHabit = createHabit(habitName, isTrue, category);

    if(exist){
        alert("Habit already exists!");
        return;
    }
        
    habitsJSON.push(newHabit);
    localStorage.setItem("habits", JSON.stringify(habitsJSON));
    console.log("Habit saved:", habitsJSON);
});



cb.addEventListener("change", function(){
    habits.done = true;
});




print.addEventListener("click", function(){
    console.log("Current habits:", habitsJSON);
});


clearAll.addEventListener("click", function(){
    habitsJSON = [];
    localStorage.removeItem("habits");
    console.log("All habits cleared");
});



/*const list = document.getElementById("list");

habits.forEach(function(habit){
    const li = document.createElement("li");
    li.textContent = habit.type + " - " + (habit.done ? "Done" : "Not done");
    list.appendChild(li);
});*/
