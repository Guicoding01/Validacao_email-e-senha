$(function(){
  funçaovalidarinput()


    function funçaovalidarinput(){
    
      $('form').submit(function(e){
      e.preventDefault
      var el = $('#email').val()
      var pass = $('#senha').val()
      var month = pass.length
      
      
    // validando campo de email

      if(el !== 0 ){
           $('h3').css('color','red')
           $('input').eq(2).css('color','red')
          if( el.match(/^[A-Za-z]{1}[a-z@.0-9]{1,}.com$/)){
                
                $('#email').css('border','1px solid rgb(0, 254, 96)')
                $('#nulo').detach()
                
              
            
          }else{
            $('#email').css('border','1px solid red')
            
        }

           
        }else{
            $('#email').css('border','1px solid red')
            
        } 
        

      //validando campo de senha

        if(month < 8){
          $('h3').css('color','red')
          
            $('#senha').css('border','1px solid red')
            $('input[type="submit"]').css('border','1px solid red')
            $('span').fadeIn(1000,function(){
            $(this).css('display','inherit')
           })
           
           
        }
        else{
          $('h3').css('color','rgb(0, 254, 96)')
         
           $('#senha').css('border','1px solid rgb(0, 254, 96)')
           $('input[type="submit"]').css('border','1px solid rgb(0, 254, 96)')
           $('span').fadeOut(2000)
           alert('formulário enviado com sucesso !')
        
        }
        return false

        
      })
      
      
    }

})
