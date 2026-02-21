//alert("povezan");
addEventListener("DOMContentLoaded", function() 
{
    const habitList = document.getElementById("list");
    const habitsJSON = JSON.parse(localStorage.getItem("habits")) || [];
   
    if(habitsJSON.length === 0)alert("No habits added yet!");
    else alert("(This is a test)Habits loaded from localStorage!");

     habitsJSON.forEach(function(habitsJSON)
    {
    const li = document.createElement("li");

      li.innerHTML = `
      ${habitsJSON.type}
      <label>
        <input type="checkbox" ${habitsJSON.done ? "checked" : ""} >
      </label>
     
      - ${habitsJSON.category}`;

    list.appendChild(li);
    });
});