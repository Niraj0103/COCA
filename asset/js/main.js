
function showHiddenItems() {
    var navList = document.querySelector('.nav_list');
    console.log(navList);
    navList.classList.toggle('show');
  }


darkbut = document.querySelector(".dark_btn")
// console.log(darkbut);
darkbut.addEventListener('click', function(){
    var element = document.body;
    //console.log(element);
    element.classList.toggle("dark_color");
    element.classList.toggle("body");
})


// $(document).ready(function(){
//   var a = $(".dark_btn")
//   console.log(a)
// })