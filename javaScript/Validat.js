function validate() {

   if( document.myForm.Name.value == "" ) {
      alert( "Please provide your name!" );
      document.myForm.Name.focus() ;
      return false;
   }
   if( document.myForm.EMail.value == "" ) {
      alert( "Please provide your Email!" );
      document.myForm.EMail.focus() ;
      return false;
   }
   return( true );
}
