const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="36.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
           <input type="text" class="search-box" placeholder="search brand, product">
           <button class="search-btn">search</button>
        </div>
        <a href="./login/login.html"><img src="user.jpg" alt=""></a>
        <a href="#"><img src="cart.jpg" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="#home" class="link">home</a></li>
    <li class="link-item"><a href="./form/form.html" class="link">form</a></li>
    <li class="link-item"><a href="#shirts" class="link">shirts</a></li>
</ul>   
    `;
} 

createNav();