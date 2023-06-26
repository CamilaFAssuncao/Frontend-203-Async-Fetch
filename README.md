# Frontend-203-Async-Fetch

Exercises

Exercise 1

For this exercise we're going to use VSCode's live-server extension, which allows us to have a running backend in a few seconds.

Create a new directory (= folder), containing 3 files:

index.html
script.js
becode.json
Create a <button>, when clicked becode rules are loaded with a fetch('becode.json'), then dynamically generate a <ul> list containing each rule in a <li>.

Exercise 2

Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.

Extra steps

Also add a <select> field with a few countries in it, to narrow down the search to a specific country. You'll have to look in agify documentation to know more about that.
Store the previous results in a localStorage so you don't have to fetch them again!
Using the promise syntax? Try to use async/await instead!
