$(document).ready(function(){$('#nav').slicknav();$('.expand-area-2').find('.next-step').on('click',function(){if($('input[name=cardnumber]').val()!==''){$('.expand-area-3').find('.expand-inputs.close-input').slideDown();}});$('.ifTaken').hide();$('.expand-area-3').find('.next-step').on('click',function(){if($('#checkbox').is(':checked')){$('.ifTaken').show();$('.ifNotTAKEN').hide();}else{$('.ifTaken').hide();$('.ifNotTAKEN').show();}
$('.expand-area-4').find('.expand-inputs.close-input').slideDown();});});