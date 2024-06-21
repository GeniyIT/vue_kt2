<template>
    <div class="footer">
        <figure class="footer-image">
            <img class="footer-image__svg" src="../assets/icons/facebook.svg"/>
            <img class="footer-image__svg" src="../assets/icons/instagram.svg"/>
            <img class="footer-image__svg" src="../assets/icons/twitter.svg"/>
            <img class="footer-image__svg" src="../assets/icons/Linkedin.svg"/>
        </figure>
        <p class="footer-text">Copyright ©2020 All rights reserved </p>
    </div>
</template>

<style>
.footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 26px;
    padding-top: 51px;
}
.footer-image{
    display: flex;
    gap: 35px;
}
.footer-text{
    font-size: 14px;
}
</style>
