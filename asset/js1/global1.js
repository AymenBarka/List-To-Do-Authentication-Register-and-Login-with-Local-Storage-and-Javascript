(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });

        var myCalendar = $('.js-datepicker');
        var isClick = 0;

        $(window).on('click', function () {
            isClick = 0;
        });

        $(myCalendar).on('apply.daterangepicker', function (ev, picker) {
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));

        });

        $('.js-btn-calendar').on('click', function (e) {
            e.stopPropagation();

            if (isClick === 1) isClick = 0;
            else if (isClick === 0) isClick = 1;

            if (isClick === 1) {
                myCalendar.focus();
            }
        });

        $(myCalendar).on('click', function (e) {
            e.stopPropagation();
            isClick = 1;
        });

        $('.daterangepicker').on('click', function (e) {
            e.stopPropagation();
        });


    } catch (er) { console.log(er); }
    /*[ Select 2 Config ]
        ===========================================================*/

    try {
        var selectSimple = $('.js-select-simple');

        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });

    } catch (err) {
        console.log(err);
    }


})(jQuery);

function register() {

    let object = {
        Name: document.getElementById('name').value,
        Birthdate: document.getElementById('birthday').value,
        Gender: document.getElementById('gender').value,
        Email: document.getElementById('email').value,
        password: document.getElementById('password').value,


    }
    if(verifMail() == false) {
    let tabUsers = JSON.parse(localStorage.getItem('tabUsers'))
    tabUsers.push(object);
    localStorage.setItem('tabUsers', JSON.stringify(tabUsers))
    window.location.href="./login.html"
    } else {
        alert('verifiez vos parametres')
    }

}
function verifMail() {
    let tabUsers = JSON.parse(localStorage.getItem('tabUsers'))
    let verif = false;
    var x = document.getElementById('email').value;
    for (let i = 0; i < tabUsers.length; i++) {
        if (tabUsers[i].Email == x) {
            verif = true
            document.getElementById('verifMail').innerHTML = '<p>emailexist</p>'
        } else {
            verif = false;
            document.getElementById('verifMail').innerHTML = '<p></p>'
        }
    }
    return verif;
}