window.onload =() => {
    if(!sessionStorage.name){
        location.href='/login';
    } else{
        
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
    
}