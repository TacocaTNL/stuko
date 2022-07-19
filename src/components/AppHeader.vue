<template>
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    <!-- <header>
        <div class="headerContainer">
            <div class="navContainer"> 
                <h1 class="headerLogo"><router-link to="/"></router-link></h1>
                <div class="headerNav">
                    <ul>
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
        <router-link to="/Home"></router-link>
        <router-link to="/About"></router-link>
    </header> -->
</template>

<script>

export default {
    name: 'AppHeader',
    props: {
        views: Array,
    }
}
</script>

<style scoped>
/* header {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   background: none; 
}

.headerContainer {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
}

.navContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 56px;
    padding: 12px 16px;
}

ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
}

li {
    list-style: none;
}

li a {
    padding: 10px 20px;
    font: 500 15px/1.6 "Helvetica Neue";
    letter-spacing: .2px;
    appearance: none;
    background-color: transparent;
    border: none;
    outline: none;
} */

</style>