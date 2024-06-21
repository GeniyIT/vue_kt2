<template>
    <div class="header">
        <nav class="header-nav">
            <RouterLink class="header-nav__item" to="/Home">Home</RouterLink>
            <RouterLink class="header-nav__item" to="/Users">Users</RouterLink>
            <RouterLink class="header-nav__item" to="/Profile">Profile</RouterLink>
        </nav>
    </div>
</template>

<script setup>

</script>

<style>
.header{
    display: flex;
    justify-content: flex-end;
    padding-right: 117px;
    padding-top: 27px;
}
.header-nav{
    display: flex;
    gap: 25px;
}
.header-nav__item{
    color: black;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
}
</style>