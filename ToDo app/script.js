// alert("welcome!")
// lets grab the input box field
const inputBox = document.getElementById("inputBox")
// let sgrab the list container
const listContainer = document.getElementById("listContainer")
// let's add an event listener that will listen and execute a function when the Add Text button is clicked
// const btn = document.getElementById("'btn'") 
// btn.addEventListener("click", (e) => {
//     if(inputBox === ''){
//         alert("You must add something")
//     } else {
//         let li = document.createElement("li")
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//     }
// }
// ) 

// let's add an event listener that will listen and execute a function when the Add Text button is clicked
const btn = document.getElementById("btn")
btn.addEventListener('click', (e) => {
    if(inputBox.value === ''){
        alert("You must add a task!")
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)

        // span can be used to add extra element, here we will use it to add a 'cancel button 
        // and attach it to every list item added
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    // to` make the input field(inputbox.value) to be empty after adding task
    inputBox.value = ''
    saveData()
})

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    saveData()
    }
}, false)

// saving data on the localStorage, we use the saveData function
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.setItem("data")
}
showTask();
