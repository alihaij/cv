
var i = 0;
var time = 3000;
var certificates_array = [ 'certificates/DDDM coursera.png', 'certificates/data-analysis.png',
'certificates/Flutter bootcamp Udemy.png',
  'certificates/java1.png', 'certificates/java2.png',
  'certificates/python.png','certificates/Web Development Udemy.png'];

function myImageNext(){
  document.getElementById('cer').src = certificates_array[i];
i++;
if (i > certificates_array.length-1){
  i = 0;
}
}

function myImagePrev(){
    i = i -1;
    if (i < 0){
      i = certificates_array.length-1;
  }
    document.getElementById('cer').src = certificates_array[i];


}
function changeImage(){
document.getElementById('cer').src = certificates_array[i];
if (i < certificates_array.length-1){
  i++;
}else{
  i=0;
}
setTimeout("changeImage()",time);
}
window.onload=changeImage;

// function validate() {
//
//       if( document.myForm.Name.value == "" ) {
//          alert( "Please provide your name!" );
//          document.myForm.Name.focus() ;
//          return false;
//       }
//       if( document.myForm.EMail.value == "" ) {
//          alert( "Please provide your Email!" );
//          document.myForm.EMail.focus() ;
//          return false;
//       }
//       return( true );
//    }
