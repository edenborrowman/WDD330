export function reset() {
    location = location;
}
  
export function resetHat(){
    document.querySelector(".announcement").textContent = "";
    document.querySelector(".student").src = "images/harry_pre_sort.svg"
    document.querySelector("#hat").src = "images/sorting_hat_illustration_1.svg";   
}

