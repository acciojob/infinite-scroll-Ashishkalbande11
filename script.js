document.addEventListener("DOMContentLoaded", function() {
    const listContainer = document.getElementById("infi-list"); // Updated to match the 'infi-list' id in HTML
    let listItemCount = 10; // Initialize with 10 items

    // Function to create and append a new list item
    function createListItem(index) {
        const listItem = document.createElement("li");
        listItem.textContent = `List Item ${index}`;
        listContainer.appendChild(listItem);
    }

    // Add initial list items
    for (let i = 1; i <= listItemCount; i++) {
        createListItem(i);
    }

    // Function to load more items when reaching the end of the list
    function loadMoreItems() {
        for (let i = listItemCount + 1; i <= listItemCount + 2; i++) {
            createListItem(i);
        }
        listItemCount += 2;
    }

    // Event listener to detect when the user has scrolled to the bottom of the list
    window.addEventListener("scroll", function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadMoreItems();
        }
    });
});
