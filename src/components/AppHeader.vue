<template>
    <header>
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
        <!-- <router-link to="/Home"></router-link>
        <router-link to="/About"></router-link> -->
    </header>
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
header {
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
}

</style>