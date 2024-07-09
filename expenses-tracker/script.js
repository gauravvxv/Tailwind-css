let arr = JSON.parse(localStorage.getItem("expense"))||[];

let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let des = form.description.value;
    let cat = form.category.value;
    let amt = form.amount.value;

    let obj = {
        description: des,
        category: cat,
        amount: amt,
    }
    arr.push(obj);
    localStorage.setItem("expense",JSON.stringify(arr));
    display(arr);
})

function display(arr){
   let tbody = document.querySelector("tbody")
   tbody.innerHTML="";

   arr.forEach(element => {
    let row = document.createElement("tr");

    let desTd = document.createElement("td");
    let catTd = document.createElement("td");
    let amtTd = document.createElement("td");
    let delTd = document.createElement("td");

    desTd.textContent = element.description;
    catTd.textContent = element.category;
    amtTd.textContent = element.amount;
    delTd.textContent = "Delete";

    row.append(desTd,catTd,amtTd,delTd);
    tbody.append(row);
   });
}

display(arr);