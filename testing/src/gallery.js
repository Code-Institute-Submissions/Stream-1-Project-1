//testing the creatSlideshow function

var picNum = 1; 

function createSlideshow(n) {

  var i; 
  var galleryLength = 145;
  var picNum=n;

  if (n > galleryLength) 
    {
      picNum = 1;
    }

  if (n < 1) 
    {
      picNum = galleryLength;
    }

  for (i = 0; i < galleryLength; i++)
    {
     // gallery[i].style.display = "none";
    }

  return picNum;
}



function plusSlides(n) 
{
  createSlideshow(picNum += n); 
  return picNum;
}
