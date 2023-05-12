// grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")//pass in arguments
let countEl = document.getElementById("count-el")//pass in arguments

let count = 0

console.log(saveEl)


function increment() {
  count += 1
  countEl.textContent = count
}

//create a function, save(),
function save()
 {
  let countStr = count + " - "
  //create a variable that contains both the count and the dash seperate 
  //render the variable in the saveEl using innnerText
  saveEl.textContent += countStr
  //make sure to not delete the exsiting content of the paragraph
  countEl.textContent=0
  count=0

}
 