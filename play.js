const mySong = document.getElementById("mysong");
const icon = document.getElementById("icon");

icon.onclick = function(){
        if(mySong.paused){
                    mySong.play();
                    icon.src = './media/icon.svg'
        } 
        else{
                    mySong.pause();
                    icon.src = './media/play.svg'    
        }     
}