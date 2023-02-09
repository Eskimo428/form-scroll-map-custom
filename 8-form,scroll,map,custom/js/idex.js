window.addEventListener('DOMContentLoaded', function () {

    const element = document.querySelector('select');
    const choices = new Choices(element, {
        searchEnabled: false,
        allowHTML: true,
        placeholder: true,
    });

    type = "text/javascript" >
        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                center: [48.872121377362284, 2.3542400932540706],
                zoom: 20
            }, {
                searchControlProvider: 'yandex#search'
            }),

                // Создаём макет содержимого.
                MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                ),

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Здесь находится это место'
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: 'img/metka.svg',
                    // Размеры метки.
                    iconImageSize: [28, 40],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -148]
                }),

                myPlacemarkWithContent = new ymaps.Placemark([48.872121377362284, 2.3542400932540706], {
                    hintContent: 'Собственный значок метки с контентом',

                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    iconContentLayout: MyIconContentLayout

                });

            myMap.geoObjects
                .add(myPlacemark)
                .add(myPlacemarkWithContent);
        });

    var selector = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7(999)999-99-99");

    im.mask(selector);

    // new JustValidate('#form', {

    //     rules: {
    //         name: {
    //             required: true,
    //             minLength: 2,
    //             maxLenght: 30,
    //         },
    //         tel: {
    //             required: true,
    //             function: (name, value) => {
    //                 const phone = selector.Inputmask.unmaskedvalue()
    //                 return Number(phone) && phone.lenght === 10
    //             }
    //         },
    //         mail: {
    //             required: true,
    //             email: true
    //         },
    //     },


    // });




    const validate = new window.JustValidate('#form');

    const validation = new JustValidate('#form');
    

    validation
    
    
        .addField('#name', [

            {
                rule: 'required',
                errorMessage: 'Вы не ввели имя',
            },
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Вы не ввели имя',
            },
            {
                rule: 'maxLength',
                value: 30,
                errorMessage: 'Не более 30 символов',
            },
        ])

        .addField('#tel', [
            {
            validator: function(name, value) {
            const phone = selector.inputmask.unmaskedvalue()
            return Number(phone) && phone.length === 10
            },
            errorMessage: 'Вы не ввели телефон',
            }
            ])

        .addField('#email', [
            {
                rule: 'required',
                errorMessage: 'Необходимо ввести e-mail',
            },
            {
                rule: 'email',
                errorMessage: 'Вы не ввели e-mail',
            },
        ]);
});