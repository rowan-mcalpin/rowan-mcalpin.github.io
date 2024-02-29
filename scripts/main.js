//region Last Modified indicator
var copyrightMessage = "&copy;2024 Rowan McAlpin";
var lastUpdate = "";

// Get the date of the most recent commit from the GitHub repository holding this code (modified from https://stackoverflow.com/a/56280126)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    
    var date = new Date(JSON.parse(this.responseText).commit.commit.author.date);
    console.log(this.responseText);
    console.log(date);

    lastUpdate = `last updated ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`

    updateFooter();
  }
};
xhttp.open("GET", "https://api.github.com/repos/rowan-mcalpin/rowan-mcalpin.github.io/branches/main", true);
xhttp.send();

// Update the footer message with copyright message + lastUpdate message
function updateFooter() {
    document.getElementById("footerContent").innerHTML = copyrightMessage + ", " + lastUpdate;
}


function spin() {
  document.body.style.transform = "rotate(360deg)";
  setTimeout(function() {
    document.body.style.transitionProperty = "none";
    document.body.style.transform = "rotate(0deg)";
    setTimeout(function() {
    document.body.style.transitionProperty = "transform";
    }, 800)
  }, 800);
}
//endregion