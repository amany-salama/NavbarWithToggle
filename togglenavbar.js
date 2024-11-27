window.onload=function()
{ 
    let navbtns=document.querySelector('.navbtns')
    let toggleicon=document.querySelector('.ri-align-justify')
    console.log (navbtns);
    console.log (toggleicon);
    toggleicon.addEventListener('click',showmenu)
    function showmenu(){navbtns.classList.toggle('active') }

   
}