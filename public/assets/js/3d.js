startTime();
var rh,
	rm,
	rs,
	rap,
	tik = 5;
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	//document.getElementById('txt').innerHTML =
	//h + ":" + m + ":" + s;

	var ampm;
	if (h > 12) {
		ampm = 'PM';
		h = Math.abs(12 - h);
	} else {
		ampm = 'AM';
	}
	if (h == 0) {
		h = 12;
	}
	if (h == rh) {
		$('#hour').text(h);
	} else {
		$('#hour').text(h).hide().fadeIn(300);
	}
	if (m == rm) {
		$('#minute').text(m);
	} else {
		$('#minute').text(m).hide().fadeIn(300);
	}
	if (s == rs) {
		$('#second').text(s);
	} else {
		$('#second').text(s).hide().fadeIn(300);
	}
	if (rap == ampm) {
		$('#ampm').text(ampm);
	} else {
		$('#ampm').text(ampm).hide().fadeIn(300);
	}
	rh = h;
	rm = m;
	rs = s;
	rap = ampm;
	if (tik > 0) {
		tik = tik - 1;
		$('.d2tick').text(tik);
	} else {
		get3d();
		tik = 30;
		$('.d2tick').text(tik);
	}
	var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
	if (i < 10) {
		i = '0' + i;
	} // add zero in front of numbers < 10
	return i;
}
$.ajaxSetup({
	cache: false,
});
$(document).ready(function () {
	get3d();
});

var getting3D = null;
function get3d() {
	if (getting3D) {
		getting3D.abort();
	}
	$('#d3').html('...');
	$('#d2Table').fadeOut(200).fadeIn();
	getting3D = $.getJSON('https://x.myanmar2d3d.com/xopen/3d.json', function (
		result
	) {
		$.each(result, function (key, val) {
			if (key == 0) {
				$('#d3').text(val.number);
			}
			$('#d3Table').append(
				'<tr><td>' +
					(key + 1) +
					'</td><td>' +
					val.date +
					"</td><td><b style='color: dark; font-size: 1em;'>" +
					val.number +
					'</b></td></tr>'
			);
		});
	});
}
