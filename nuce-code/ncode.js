// Nuclear code randomize by Norman Andrians
// Randomize Doujin Code on nhentai.net

window.onload = function () {
    // apa lu liat-liat :v
    var containerBody = document.querySelectorAll('.container-body')[0];

    var charPass = ["a", "Y", "E", "d", "s", "v"];
    var passwordCode = "ug"+Math.floor(Math.PI * Math.sqrt(2080))+"AwjU"+Math.floor(Math.exp(4))+"aQ"+charPass[Math.floor(Math.PI + 1)]+charPass[1];
    var sandi = prompt("Please Enter The Password");

    if (sandi == passwordCode) {
    	return containerBody.style.display = 'block';
    } else {
    	return alert("Wrong Password or Please Enter The Password");
    }

    
};

var nuce;

function generateClick() {
    nuce = Math.floor(Math.random() * 300000) + 100000;

    var useBtn = document.querySelectorAll('.use-btn')[0];
    var codeContainer = document.querySelectorAll('.container-code')[0];
    var nuceCode = document.querySelectorAll('.nuce-code')[0];

    nuceCode.innerHTML = nuce;

    codeContainer.style.display = 'block';
    useBtn.style.display = 'block';

    
    return nuce;
}

function goClick() {
    return window.location.href = "https://nhentai.net/g/" + nuce;
}