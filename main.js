/* globals require */


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
console.log(Airtable);

// use the airtable library to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "key4DlL9qmJrcwvJR" }).base(
  "appVfQKnoWiUKtXof"
);
// Get your table from the base, select ALL the records, and specify the callback functions that will receive each page of data
base("bookdesigns").select({}).eachPage(gotPageOfBooks, gotAllBooks);

// an empty array to hold our people data
const books = [];

// callback function that receives each page of data (considered here as records) and adds them to our list of people
function gotPageOfBooks(records, fetchNextPage) {
  console.log("gotPageOfBooks()");
  // This takes the list of records and add them to the people array
  books.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when ALL pages are loaded
// You don't need to edit this function.
function gotAllBooks(err) {
  console.log("gotAllBooks()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }

  consoleLogBooks();
  showBooks();

}

function consoleLogBooks() {
  console.log("consoleLogBooks()");
  var booksContainer = document.querySelector(".container");
  books.forEach((book) => {
    console.log("Books", book);
  });
}

function showBooks() {
  console.log("showBooks()");
  books.forEach((book)=> {

    // main: add containers & photos & description/title on modal //

    var container2 = document.createElement("div");
    container2.classList.add("bigbookContainer");


    var bookContainer = document.createElement("div");
    bookContainer.classList.add("book-container");
    document.querySelector(".cover").append(bookContainer);


    var bookImage = document.createElement("img");
    bookImage.classList.add("bookImage")
    bookImage.src = book.fields.cover_image[0].url;
    bookContainer.append(bookImage);


    var bookTitle = document.createElement("h2");
    bookTitle.classList.add("bookTitle")
    bookTitle.innerText = book.fields.title;
    bookContainer.append(bookTitle);

    var bookDescription = document.createElement("p");
    bookDescription.classList.add("bookDescription")
    bookDescription.innerText = book.fields.description;
    bookContainer.append(bookDescription);

    //genre //

    let genresList = book.fields.genres;

    genresList.forEach(function(genre){
      const genreElement = document.createElement("span");
      genreElement.classList.add("genreTag");
      genreElement.innerText = genre;
      bookContainer.appendChild(genreElement);

      // TODO: Add this genre name as a class to the songContainer
       bookContainer.classList.add(genre); 

    });

    let topicsList = book.fields.topics;

    topicsList.forEach(function(topic){
      const topicElement = document.createElement("span");
      topicElement.classList.add("topicTag");
      topicElement.innerText = topic;
      bookContainer.appendChild(topicElement);

      // TODO: Add this genre name as a class to the songContainer
       bookContainer.classList.add(topic); 

    });
    
    //filtering//

    let filterYummy = document.querySelector("#yummy");
    filterYummy.addEventListener("click", function(){

        if (bookContainer.classList.contains("yummy")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });
    let filterWordy = document.querySelector("#wordy");
    filterWordy.addEventListener("click", function(){

      if (bookContainer.classList.contains("wordy")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });
    let filterColors = document.querySelector("#colors");
    filterColors.addEventListener("click", function(){

      if (bookContainer.classList.contains("colors")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });

    let filterBlackandwhite = document.querySelector("#blackandwhite");
    filterBlackandwhite.addEventListener("click", function(){

      if (bookContainer.classList.contains("blackandwhite")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });

    let filterHistorical = document.querySelector("#historical");
    filterHistorical.addEventListener("click", function(){

      if (bookContainer.classList.contains("historical")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });

    let filterInformational = document.querySelector("#informational");
    filterInformational.addEventListener("click", function(){

      if (bookContainer.classList.contains("informational")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });

    let filterFunky = document.querySelector("#funky");
    filterFunky.addEventListener("click", function(){

      if (bookContainer.classList.contains("funky")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });

    let filterPersonal = document.querySelector("#personal");
    filterPersonal.addEventListener("click", function(){

      if (bookContainer.classList.contains("personal")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });

    let filterReset = document.querySelector("#reset");
     filterReset.addEventListener("click", function(){
         container2.style.display = "block";
     });
    
     // For Categories //

    let filterTypography = document.querySelector("#typography");
    filterTypography.addEventListener("click", function(){

      if (bookContainer.classList.contains("typography")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });

    let filterBooks = document.querySelector("#books");
    filterBooks.addEventListener("click", function(){

      if (bookContainer.classList.contains("books")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });

    let filterIllustration = document.querySelector("#illustration");
    filterIllustration.addEventListener("click", function(){

      if (bookContainer.classList.contains("illustration")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });

    let filterPhotography = document.querySelector("#photography");
    filterPhotography.addEventListener("click", function(){

      if (bookContainer.classList.contains("photography")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });

    let filterRecipes = document.querySelector("#recipes");
    filterRecipes.addEventListener("click", function(){

      if (bookContainer.classList.contains("recipes")){
        container2.style.display = "block";
      }else{
        container2.style.display = "none"
      }
    });



    // add event listener to add active class to book container

    container2.addEventListener("click", function(){
      bookContainer.classList.toggle("active");

    });
    /*
      $('#box2').click(function() {
      var random = Math.floor(Math.random() * $('bookContainer').length);
      $('.container2').hide().eq(random).show();
    });*/ 


   container2.append(bookContainer);
   container2.append(bookImage);
   document.querySelector(".coverwrap").appendChild(container2);
  });
  //for filter//
   booksContainer.appendChild(bookContainer);
};

