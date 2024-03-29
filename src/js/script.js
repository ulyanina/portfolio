const humburger = document.querySelector('.humburger'),
	menu = document.querySelector('.menu'),
	menuItem = document.querySelectorAll('.menu__link'),
   closeBtn = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
   menu.classList.add('active');
});
closeBtn.addEventListener('click', () => {
   menu.classList.remove('active');
});
menuItem.forEach(item => {
	item.addEventListener('click', () => {
		menu.classList.remove('active');
	});
});

const percent = document.querySelectorAll('.percentage__sup-percent'),
   coloredLine = document.querySelectorAll('.percentage__sub-color');

percent.forEach((item, i) => {
   coloredLine[i].style.width = item.innerHTML;
});

//validation
function validateForms(form) {
	$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
         },
         message: {
            required: true
         },
         policy: {
            required: true
         }
		},
		messages: {
			name: {
				required: 'Пожалуйста, введите свое имя',
				minlength: jQuery.validator.format('Минимальное количество символов: {0}')
			},
			email: {
				required: 'Пожалуйста, введите свой почтовый адрес',
				email: 'Неправильно введен адрес почты'
         },
         message: {
				required: 'Пожалуйста, опишите задачу'
         },
         policy: {
            required: 'Чтобы отправить сообщение Вы должны согласиться с политикой конфиденциальности'
         }
		}
	});
}
validateForms('#contacts__forms-row');


const policyAlarm = document.querySelector('.policy');

policyAlarm.addEventListener('click', () => {
	alert('На сегодняшний день данные не собираются!');
});