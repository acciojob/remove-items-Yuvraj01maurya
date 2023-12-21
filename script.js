//your JS code here. If required

function removeselectColor() {
  var dropdown = document.getElementById("colorSelect");
  
  if (dropdown.selectedIndex !== -1) {
    dropdown.remove(dropdown.selectedIndex);
  }
}