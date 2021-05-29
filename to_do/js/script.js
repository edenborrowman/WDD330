
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
  };

  function toggleTaskList() {
    document.getElementById("peaches").classList.toggle("hide");
    entryFocus();
  };

  const entryFocus = () => {
    document.getElementById("newItem").focus();
}

