fetch('becode.json') // Fetch the contents of the 'becode.json' file
  .then(function(response) {
    return response.json(); // Convert the response data to JSON format
  })
  .then(function(data) {
    const fetching = document.querySelector(".fetching"); // Select the element with class "fetching"
    fetching.addEventListener("click", function() { // Add a click event listener to the "fetching" element
        let ul = document.createElement('ul'); // Create a new 'ul' element
        data.forEach(function(item) { // Iterate over each item in the 'data' array
          let li = document.createElement('li'); // Create a new 'li' element
          li.textContent = item; // Set the text content of the 'li' element to the current item
          ul.appendChild(li); // Append the 'li' element to the 'ul' element
        });
        fetching.appendChild(ul); // Append the 'ul' element (with 'li' elements) to the 'fetching' element
    });
});
