function Generate() {
    let player1 = Math.floor((Math.random()*6)+1);
    let player2 = Math.floor((Math.random()*6)+1);
    console.log(player1);
    console.log(player2);
    Check(player1 ,player2)
}
function Check(player1 , player2){
    let img1 = document.getElementById("img1").src = `imgs/${player1}.jpg`;
    let img2 = document.getElementById("img2").src = `imgs/${player2}.jpg`;
    if (player1 > player2) 
        document.getElementById("spam-1").innerHTML = "1"
    else if(player1 < player2)
        document.getElementById("spam-1").innerHTML = "2"
    else
        document.getElementById("h1-1").innerHTML = "Draw "
        
        document.body.addEventListener("keypress" , ()=>{
            window.location.reload();
        })
}
