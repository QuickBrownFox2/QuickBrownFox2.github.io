var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.png') {
      myImage.setAttribute ('src','images/logo2.png');
    } else {
      myImage.setAttribute ('src','images/logo.png');
    }
}