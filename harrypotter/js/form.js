function validateForm() {
    let x = document.forms["wandApp"]["school"].value;
   
    if (x == "Hogwarts" || x =="Ilvermorny" || x =="Beauxbatons" || x =="Durmstrang" || x =="Mahoutokoro" || x =="Uagadou" || x =="Castelobruxo") {
        return true;
    }
    else{
      alert("You must enter the name of a magical school.");
      return false;
    }
  }