var i = 0;
var images = [];
var time = 2000;

// Image list

images[0] = 'imge/opo.png';
images[1] = 'imge/سقط.jpg';
images[2] = 'imge/i i.jpg';
images[3] = 'imge/بغا.jpg';
images[4] = 'imge/صنعاء2.png';
images[5] = 'imge/باب اليمن.jpg';
images[6] = 'imge/ooop.jpg';
images[7] = 'imge/البيوت.jpg';
images[8] = 'imge/loo.png';
images[9] = 'imge/ش.jpg';
images[10] = 'imge/ب.jpg';
images[11] = 'imge/ا.jpg';
images[12] = 'imge/زبيد.png';
images[13] = 'imge/ز.jpg';
images[14] = 'imge/بي.jpg';
images[15] = 'imge/د.jpg';

//change image
function changeImg(){
    var my =  document.getElementById('image')
    my .src = images[i];
   

    if(i < images.length - 1){
        i++
    }else{
        i=0;
    }

    setTimeout("changeImg()", time)
}

window.onload = changeImg;


function viewImg(){
    document.getElementById('sea').src = 'img/ب.jpg';
}