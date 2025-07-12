  
  const header = document.querySelector('.header');
  const categoriesAsideItems = document.querySelectorAll('.categories-aside__item');
  //const dropDown = document.querySelector(".categories-aside__dropdown");



//  function openCategoryList(){

  categoriesAsideItems.forEach(item => {
    item.addEventListener('click', (event) => {
      // Code to execute when an <li> is clicked
      const dropDown = item.querySelector(".categories-aside__dropdown");


      console.log(item)
   
     item.classList.toggle("is-open");
     // item.style.backgroundColor = 'gray'; // Example: change background color
     console.log(dropDown.style.display);
     
    // dropDown.style.display = "none" ? 'flex': 'none';

     dropDown.classList.toggle("to-show");
    

     


      });

    });
//  }



  // function fix() {
  //      if(dropDown.style.display ==="none") {
  //       dropDown.style.display = "flex";
  //    }else{
  //        dropDown.style.display = "none";
  //    }
  
  // }




  function updateHeaderClass() {
    if (window.scrollY > 80) {
      header.classList.remove('transparent');
      header.classList.add('solid');
    } else {
      header.classList.remove('solid');
      header.classList.add('transparent');
    }
  }

  // Проверка при загрузке страницы
  window.addEventListener('load', updateHeaderClass);
 

  // Проверка при скролле
 // window.addEventListener('scroll', updateHeaderClass);

