import Isotope from 'isotope-layout';
var iso = new Isotope( '#js-isotopeGrid', {
  itemSelector: '.js-isotopeItem',
  percentPosition: true,
  // disabled as all columns are the same
  // masonry: {
  //   // use outer width of grid-sizer for columnWidth
  //   columnWidth: '.grid-sizer'
  // } 
});
// add on click listener to button parent div
var buttonParent = document.querySelector('#js-buttonParent');
buttonParent.addEventListener('click',function(event){
  // get data-filter value
  var filterValue = event.target.getAttribute('data-filter');
  // arrange based on filter value
  iso.arrange({ filter: filterValue });
  // remove 'active' class from all children
  for (let sibling of filterButtons.children) {
    sibling.classList.remove('active');
  }
  // add active class to the button that was clicked on
  event.target.classList.add('active');
});
