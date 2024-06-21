<template>
    <div class="home-page">
        <div class="home-page__text">
            <h1 class="home-page__title">Home Page</h1>
            <p class="home-page__description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button class="home-page__button" @click="$router.push('/Login')">Authorization</button>
        </div>
        <figure class="home-page__image">
            <img src="@/assets/images/tools.png">
        </figure>
    </div>
</template>

<style>
.home-page{
    display: flex;
    padding: 73px 86px 182px 148px;
    gap: 111px;
}
.home-page__text{
    display: flex;
    flex-direction: column;
    gap: 25px;
}
.home-page__title{
    font-size: 44px;
    font-weight: 700;
}
.home-page__button{
    width: 208px;
    height: 43px;
    background-color: #FF6464;
    border: none;
    color: white;
    cursor:pointer;
}
</style>