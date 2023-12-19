var futureUpdates = document.querySelectorAll('.will-update-in-future');
for(let i = 0; i<futureUpdates.length; i++){
    futureUpdates[i].addEventListener('click', function(){
        alert("🛠️ Under Maintainence!!\nWill update this feature soon..🗓️\nPlease proceed through manual entry 😄");
    });
}