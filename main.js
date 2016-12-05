//all logics are here
$(document).ready(function(){
    
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0').click(function(){
        var value = $(this).val();
        $('#answer').val($('#answer').val() + value);
        
    });
    $('#C').click(function(){
        $('#answer').val('');
        $('#operations').val('');
        $('#operations').removeClass('activeAnswer');
        $('#equals').val();
    });
    $('#plus').click(function(){
        
        if($('#answer').val() =='')
            {
            return false;
        $('#equals').attr('onclick','');
            }
        else if($('#operations').attr('class') == 'activeAnswer')
        {
            $('#operations').val($('#operations').val() + $('#plus').val());
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
        else
            {
                $('#operations').val($('#operations').val() + $('#answer').val() + $('#plus').val());
                $('#answer').val('');
                $('#equals').attr('onclick','');
            }
        
            
    });
    
    $('#substracts').click(function(){
        
        if($('#answer').val() =='')
            {
            return false;
        $('#equals').attr('onclick','');
            }
        else if($('#operations').attr('class') == 'activeAnswer')
        {
            $('#operations').val($('#operations').val() + $('#substracts').val());
            $('#answer').val('');
           $('#equals').attr('onclick','');
        }
        else
            {
                $('#operations').val($('#operations').val() + $('#answer').val() + $('#substracts').val());
                $('#answer').val('');
                $('#equals').attr('onclick','');
            }
        
            
    });
$('#divides').click(function(){
        
        if($('#answer').val() =='')
            {
            return false;
        $('#equals').attr('onclick','');
            }
        else if($('#operations').attr('class') == 'activeAnswer')
        {
            $('#operations').val($('#operations').val() + $('#divides').val());
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
        else
            {
                $('#operations').val($('#operations').val() + $('#answer').val() + $('#divides').val());
                $('#answer').val('');
                $('#equals').attr('onclick','');
            }
        
            
    });
$('#products').click(function(){
        
        if($('#answer').val() =='')
            {
            return false;
        $('#equals').attr('onclick','');
            }
        else if($('#operations').attr('class') == 'activeAnswer')
        {
            $('#operations').val($('#operations').val() + $('#products').val());
            $('#answer').val('');
            $('#equals').attr('onclick','');
        }
        else
            {
                $('#operations').val($('#operations').val() + $('#answer').val() + $('#products').val());
                $('#answer').val('');
                $('#equals').attr('onclick','');
            }
        
            
    });

    $('#equals').click(function(){
        if($('#equals').attr('onclick')!='return false')
            {
        var x = $('#answer').val();
         var y = $('#operations').val();
        var z = y.concat(x);
        $('#answer').val(eval(z));
        $('#operations').val(eval(z));
        $('#operations').addClass('activeAnswer');
        $('#equals').attr('onclick','return false');
    }
        
    });
        
        document.getElementById("time").innerHTML = Date();
    });