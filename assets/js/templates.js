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
// only select child buttons (nothing else)
var buttons = buttonParent.querySelectorAll('button');
// loop over child buttons
for (let button of buttons) {
  // add eent listener to each button
  button.addEventListener('click',function(event){
    // get data-filter value
    var filterValue = this.getAttribute('data-filter');
    // arrange based on filter value
    iso.arrange({ filter: filterValue });
    // remove 'active' class from all children
    for (let button of buttons) {
      if (button !== this) {
        button.classList.remove('active');
        button.setAttribute("aria-pressed", "false")
      }
    }
    // add active class to the button that was clicked on
    this.classList.add('active');
    this.setAttribute("aria-pressed", "true")
  });
};
