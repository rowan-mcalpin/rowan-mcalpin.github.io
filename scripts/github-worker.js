//region Last Modified indicator
var copyrightMessage = "&copy;2024 Rowan McAlpin";
var lastUpdate = "";

// Get the date of the most recent commit from the GitHub repository holding this code (modified from https://stackoverflow.com/a/56280126)
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let repos = JSON.parse(this.responseText);
    repos.forEach((repo)=>{
        if(repo.name == "rowan-mcalpin.github.io") {
            lastUpdate = `last updated ${new Date(repo.updated_at).getMonth()+1}/${new Date(repo.updated_at).getDate()}/${new Date(repo.updated_at).getFullYear()}`
        }
    });

    updateFooter();
  }
};
xhttp.open("GET", "https://api.github.com/users/rowan-mcalpin/repos", true);
xhttp.send();

// Update the footer message with copyright message + lastUpdate message
function updateFooter() {
    document.getElementById("footerContent").innerHTML = copyrightMessage + ", " + lastUpdate;
}
//endregion