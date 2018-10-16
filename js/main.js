let navMobile = document.getElementById('nav-mobile');
let navbarToggle = document.getElementById('navbar-toggle');

navbarToggle.addEventListener('click',function(){

    if(this.classList.contains('active')){
      navMobile.style.display="none";
      this.classList.remove('active');
    }
    else{
      navMobile.style.display="flex";
      this.classList.add('active');
    }
});
