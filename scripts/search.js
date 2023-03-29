window.addEventListener('load', init);

/**
 * 
 * @function
 * @name init
 * @description Creates a search input and adds it to the DOM.
 * @returns {void}
 * 
 */
function init(){
   var searchInput = document.createElement('input');
   if (searchInput) {
      searchInput.setAttribute('type', 'text');
      searchInput.setAttribute('id', 'search-input');
      searchInput.setAttribute('onkeyup', 'searchDocs()');
      searchInput.setAttribute('placeholder', 'Search...');
      searchInput.style.borderRadius = '6px';
      searchInput.style.border = 'solid 1px #ccc';
      searchInput.style.background = '#fefefe';
      searchInput.style.padding = '10px 20px';
      searchInput.style.marginLeft = '50%';
      searchInput.style.transform = 'translateY(-50%)';
      var main = document.getElementById('main');
      main.childNodes[1].style.display = 'inline';
      main.insertBefore(searchInput, main.childNodes[2]);
   }
}

/**
 * 
 * @function
 * @name searchDocs
 * @description Searches the docs for the input value.
 * @returns {void}
 * 
 */
function searchDocs() {

   var docsList = document.querySelectorAll('nav ul li a');

   var input = document.getElementById('search-input').value.toLowerCase();
   if (input.length == 0) {
      for (var i = 0; i < docsList.length; i++) {
         var item = docsList[i];
         item.style.display = '';
         item.style.backgroundColor = 'transparent';
      }
   }
   else{
      for (var i = 0; i < docsList.length; i++) {
         var item = docsList[i];
         if (item.innerHTML.toLowerCase().indexOf(input) > -1) {
               item.style.display = '';
               item.style.backgroundColor = 'yellow';
         } else {
               item.style.display = 'none';
               item.style.backgroundColor = 'transparent';
         }
      }
   }
}