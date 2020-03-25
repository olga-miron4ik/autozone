/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width="250px";
   
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.forms.info.FIO.addEventListener('blur', ()=>valid_fio(false), false);

function valid_fio(focus){
	var count = 0;
	var f = document.forms.info.FIO.value;

	if(!f){
		document.getElementById('fio').innerHTML = 'Введите ФИО';
		count++;
		if(focus) document.forms.info.FIO.focus();
	}
	else{
		document.getElementById('fio').innerHTML = '';
	}
	return count;
}

window.onload = function(){
document.forms.info.Phone.addEventListener('blur', ()=>valid_ph(false), false);

function valid_ph(focus){
	var count = 0;
	var ph = document.forms.info.Phone.value;

	if(!ph){
		document.getElementById('phone').innerHTML = 'Введите номер телефона';
		count++;
		if(focus) document.forms.info.Phone.focus();
	}
	else{
		document.getElementById('phone').innerHTML = '';
	}
	return count;
}

document.forms.info.Car.addEventListener('blur', ()=>valid_car(false), false);

function valid_car(focus){
	var count = 0;
	var c = document.forms.info.value;

	if(!c){
		document.getElementById('car').innerHTML = 'Введите марку и модель машины';
		count++;
		if(focus) document.forms.info.Car.focus();
	}
	else{
		document.getElementById('car').innerHTML = '';
	}
	return count;
}

document.forms.info.Mytext.addEventListener('blur', ()=>valid_text(false), false);

function valid_text(focus){
	var count = 0;
	var t = document.forms.info.Mytext.value;

	if(!t){
		document.getElementById('mytext').innerHTML = 'Введите причину обращения';
		count++;
		if(focus) document.forms.info.Mytext.focus();
	}
	else{
		document.getElementById('mytext').innerHTML = '';
	}
	return count;
}

document.forms.info.Date.addEventListener('blur', ()=>valid_date(false), false);

function valid_date(focus){
	var count = 0;
	var d = document.forms.info.Date.value;

	if(!d){
		document.getElementById('date').innerHTML = 'Введите дату визита';
		count++;
		if(focus) document.forms.info.Date.focus();
	}
	else{
		document.getElementById('date').innerHTML = '';
	}
	return count;
}

document.forms.info.Time.addEventListener('blur', ()=>valid_time(false), false);

function valid_time(focus){
	var count = 0;
	var t = document.forms.info.Time.value;

	if(!t){
		document.getElementById('time').innerHTML = 'Введите время визита';
		count++;
		if(focus) document.forms.info.Time.focus();		
	}
	else{
		document.getElementById('time').innerHTML = '';
	}
	return count;
}

document.forms.info.addEventListener('submit', validate, false);

function validate(EO){
	EO = EO || window.event;
	var count = 0;

	count+=valid_fio(!count);
	count+=valid_ph(!count);
	count+=valid_car(!count);
	count+=valid_text(!count);
	count+=valid_date(!count);
	count+=valid_time(!count);

	if(count)
		EO.preventDefault();
}
}