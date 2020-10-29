// select all elements and create variables

//first page
var firstPage = document.getElementById("firstPage");
var continueBtn = document.getElementById("continueBtn");

//progress bar
var myProgress = document.getElementById("myProgress");
var myBar = document.getElementById("myBar");

//music category
var category = document.getElementById("category");
var countryBtn = document.getElementById("countryBtn");
var jazzBtn = document.getElementById("jazzBtn");
var rockBtn = document.getElementById("rockBtn");
var electronicBtn = document.getElementById("electronicBtn");

//country
var country = document.getElementById("country");
var countryOne = document.getElementById("countryOne");
var countryTwo = document.getElementById("countryTwo");
var countryThree = document.getElementById("countryThree");
var countryFour = document.getElementById("countryFour");

//Jazz
var jazz = document.getElementById("jazz");
var jazzOne = document.getElementById("jazzOne");
var jazzTwo = document.getElementById("jazzTwo");
var jazzThree = document.getElementById("jazzThree");
var jazzFour = document.getElementById("jazzFour");

//Rock
var rock = document.getElementById("rock");
var rockOne = document.getElementById("rockOne");
var rockTwo = document.getElementById("rockTwo");
var rockThree = document.getElementById("rockThree");
var rockFour = document.getElementById("rockFour");

//Electronic 
var electronic = document.getElementById("electronic");
var elecOne = document.getElementById("elecOne");
var elecTwo = document.getElementById("elecTwo");
var elecThree = document.getElementById("elecThree");
var elecFour = document.getElementById("elecFour");

//Timeline
var timeline = document.getElementById("timeline");
var myRange = document.getElementById("myRange");

//Footer
var thanksBtn = document.getElementById("thanksBtn");

//hide other pages upon loading
function initPage() {
  firstPage.style.display ="block";
  myProgress.style.display = "none";
  category.style.display = "none";
  country.style.display = "none";
  rock.style.display = "none";
  jazz.style.display = "none";
  electronic.style.display = "none";
  }
initPage();

//display music categories when continue is clicked
continueBtn.addEventListener("click", showMusic);

function showMusic() {
firstPage.style.display = "none";
myProgress.style.display = "block";
category.style.display = "block";
country.style.display = "none";
rock.style.display = "none";
jazz.style.display = "none";
electronic.style.display = "none";
}
