$('.Portfolio').slick({ //призываем плагин
  infinite: true,   //зацикленный слайдер - после последнего слайда идёт первый
  slidesToShow: 1, //количество слайдов, которые выводятся на экране
  slidesToScroll: 1, //количество слайдов, которые перелистываются за один раз
  centerMode: false,  //В режиме центрирования активный слайд устанавливается по центру.
  arrows: false,//стрелочки
  autoplay: true,
  autoplaySpeed: 2000,
  adaptiveHeight: true
});


$('.form_button').click(function(){
  var email = $('.form_email').val().trim(); //берем данные, функция трим удаляет пробелы
  var name = $('.form_name').val().trim();
  var massage = $('.form_massag').val().trim();

// Проверка полей
  if(name == "" && email == "" && massage.length < 15){
    $('.error_mas1').text("Enter a name");
    $('.error_mas2').text("Enter email");
    $('.error_mas3').text("Enter a message of at least 15 characters");
    return false;
  } else if(name == "" && email == ""){
    $('.error_mas1').text("Enter a name");
    $('.error_mas2').text("Enter email");
    return false;
  } else if(email == "" && massage.length < 15){
    $('.error_mas2').text("Enter email");
    $('.error_mas3').text("Enter a message of at least 15 characters");
    return false;
  } else if(name == "" && massage.length < 15){
    $('.error_mas1').text("Enter a name");
    $('.error_mas3').text("Enter a message of at least 15 characters");
    return false;
  } else if(name == ""){
    $('.error_mas1').text("Enter a name");
    return false;
  } else if(email == ""){
    $('.error_mas2').text("Enter email");
    return false;
  } else if(massage.length < 15){
    $('.error_mas3').text("Enter a message of at least 15 characters");
    return false;
  }

$('.error_mas1').text("");
$('.error_mas2').text("");
$('.error_mas3').text("");


// призываем функцию аджакс
$.ajax({
  type: 'POST',
  url: 'mail.php', //куда отправляем данные
  cache: false, //хеширование
  data: {'email' : email, 'name': name, 'massage' : massage}, //данные
  dataType: "HTML", //тип данных
  //пока ожидаем ответ от сервера, кнопка не актива
  beforeSend: function(){
    $('.form_button').prop("disabled", true)
  },
  //когда уже получили данные
  success: function(data){
    if(!data)
    alert("ошибка отправления");
    else
    $('massag_form').trigger("reset");
    $('.form_button').prop("disabled", false);
    alert("Сообщение отпралено");

  }

});

});

$('.Cont_message').click(function() {
  $(".my_form").show(300);
});

$('.clos_button').click(function closeForm() {
  $(".my_form").hide(300);
});

//автоматческое расширение textarea

$('.form_massag').on('input', function(){
	this.style.height = 'max-height';
	this.style.height = (this.scrollHeight) + 'px';
});


$('.menu_open').click(function() {
  $(".menu").slideToggle(250);
});

$('.menu_close').click(function closeForm() {
  $(".menu").slideUp(250);
});

$('.menu_h').click(function closeForm() {
  $(".menu").slideUp(250);
});

$('.menu_a').click(function closeForm() {
  $(".menu").slideUp(250);
});

$('.menu_s').click(function closeForm() {
  $(".menu").slideUp(250);
});

$('.menu_p').click(function closeForm() {
  $(".menu").slideUp(250);
});

$('.menu_c').click(function closeForm() {
  $(".menu").slideUp(250);
});