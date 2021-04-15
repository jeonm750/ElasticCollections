/* globals require */
console.log("Hello, Airtable");

// load the airtable library, call it "Airtable"
var Airtable = require("airtable");

// use the airtable library to get a variable that represents one of our bases
// We needed to put in the right apiKey and
// base ID here!
var base = new Airtable({ apiKey: "key4DlL9qmJrcwvJR" }).base(
  "appVfQKnoWiUKtXof"
);

// Get the "songs" table from the base,
// specify the view (which should be SORTED by rating),
// and specify the callback functions that will receive each page of data
base("bookdesigns").select({
  // TODO: add your view in here
  //view: "GridView"
}).eachPage(gotPageOfData, gotAllData);

// an empty array to hold our songs data
const books = [];

// callback function that receives each page of data (considered here as records) and adds them to our list of songs
function gotPageOfData(records, fetchNextPage) {
  console.log("gotPageOfData()");
  console.log("There are "+records.length+" items in records");
  // This takes the list of records and add them to the songs array
  books.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when ALL pages are loaded
function gotAllData(err) {
  console.log("gotAllData()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call function to show the data
  showData();
}

// show the data on the page
function showData() {
  console.log("showData()");

  // find the shelf element
  const booksContainer = document.querySelector(".container");

  // loop through all the people listed in the Airtable data.
  // Inside is the code we are applying for EACH song in the list of songs.
  books.forEach((book) => {

    // Print out what a single songs's data feidls looks like
    console.log("SHOWING THE BOOK")
    console.log(book.fields);


    /** CREATE CONTAINER */
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("bookContainer");
    document.querySelector("bookContainer").append(bookContainer); /*

    const booksCover_image = document.createElement("img");
    booksCover_image.src = book.fields.cover_image[0].url;
    console.log(book.fields.cover_image[0].url);
    bookContainer.appendChild(booksCover_image);

  

    /*******************
    ADD THE TITLE
    *******************/
/*
    const titleElement = document.createElement("h2");
    titleElement.innerText = book.fields.title;
    bookContainer.appendChild(titleElement);
    
    /*******************
    ADD ARTIST TITLE
    *******************/
/*
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = book.fields.description;
    bookContainer.appendChild(descriptionElement); 


    /*******************
    ADD GENRES
    *******************/
    let bookGenre = book.fields.genres; 

    bookGenre.forEach(function(genre){ /*
      const genreElement = document.createElement("span"); 
      genreElement.classList.add("genreTag"); 
      genreElement.innerText = genre;
      bookContainer.appendChild(genreElement); */
      // TODO: Add this genre name as a class to the songContainer //

        bookContainer.classList.add(genre);
      })

    /***********
     TODO: CREATE FILTER-BY-GENRE FUNCTIONALITY
     **********/ 

     var filterYummy = document.querySelector('#yummy');
    filterYummy.addEventListener("click", function(){

        if (bookContainer.classList.contains("yummy")){
        bookContainer.style.display = "block";
         }else{
        bookContainer.style.display = "none";
    }

    })

    var filterWordy = document.querySelector('#wordy');
    filterWordy.addEventListener("click", function(){

    if (bookContainer.classList.contains("wordy")){
        bookContainer.style.display = "block";
    }else{
        bookContainer.style.display = "none"
    }

    });


    var filterColors = document.querySelector('#colors');
    filterColors.addEventListener("click", function(){

    if (bookContainer.classList.contains("colors")){
        bookContainer.style.display = "block";
    }else{
        bookContainer.style.display = "none"
    }
  });
    var filterReset = document.querySelector('#reset');
     filterReset.addEventListener("click", function(){
         bookContainer.style.display = "block";
     });
    
    booksContainer.appendChild(bookContainer);
  });
}
