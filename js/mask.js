$(document).ready(function(){
	$('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-9999" }); 

	$('form').each(function () {
		$(this).validate({
			errorPlacement(error, element) {
				return true;
			},
			focusInvalid: false,
			rules: {
				Телефон: {
					required: true,
				},
				Имя: {
					required: true,
					maxlength: 10,
				}
			},
			messages: {
				Телефон: {
					required: 'Нужно что-то ввести'
				},
				Имя: {
					required: 'Нужно что-то ввести',
					maxlength: 'Нужно ввести максимум 10 букв'
				}
			},
			submitHandler(form) {
				let th = $(form);

				$.ajax({
					type: 'POST',
					url: 'mail.php',
					data: th.serialize(),
					// eslint-disable-next-line func-names
				}).done(() => {

					th.trigger('reset');					
					th.reset();             

				});								
				return false;
			}
		});
	});
});


			