function addSideBar() {
    document.querySelector('#sideBar').classList.add('active');
    document.querySelector('#close-icon').classList.remove('active');
}

function removeSideBar() {
    document.querySelector('#sideBar').classList.remove('active');
    document.querySelector('#close-icon').classList.add('active');
}

window.onscroll = () => {
    removeSideBar();
}

function showProject1() {
    document.querySelector("#show1").classList.add("active");
}

function showProject2() {
    document.querySelector("#show2").classList.add("active");
}

function showProject3() {
    document.querySelector("#show3").classList.add("active");
}

function previewClose(){
    document.querySelector("#show1").classList.remove("active");
    document.querySelector("#show2").classList.remove("active");
    document.querySelector("#show3").classList.remove("active");
}