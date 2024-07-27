function filterAndSetActive(element, filter) {
    filterItems(filter);
    setActiveListItem(element);
  }
  

  function filterItems(filter) {
    var portfolioItems = document.getElementsByClassName('portfolio')[0].getElementsByClassName('container');

    // Show/hide portfolio items based on the data-filter attribute
    for (var i = 0; i < portfolioItems.length; i++) {
        var dataFilter = portfolioItems[i].getAttribute('data-filter');
        if (dataFilter === filter || filter === '*') {
            portfolioItems[i].classList.remove('category-hidden');
            function removeclass(portfolioItems, i) {
                portfolioItems[i].classList.remove('animation-hidden');
            }
            setTimeout(removeclass, 400 ,portfolioItems,i); // Delay of 800 milliseconds before removing 'category-hidden' class
        } else {
            portfolioItems[i].classList.add('animation-hidden');
            function addclass(portfolioItems, i) {
                portfolioItems[i].classList.add('category-hidden');
            }
            setTimeout(addclass, 800, portfolioItems, i); // Delay of 800 milliseconds before adding 'animation-hidden' class
        }
    }
}


function setActiveListItem(element) {
    // Remove active class from all list items
    var listItems = document.getElementsByClassName('sorter')[0].getElementsByTagName('a');
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove('active');
      listItems[i].classList.remove('gold');
    }
  
    // Add active class to the clicked list item
    element.classList.add('active');
    element.classList.add('gold');
  }
  
