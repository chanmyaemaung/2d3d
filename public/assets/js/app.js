startTimeOne();
var rh,
	rm,
	rs,
	rap,
	tik = 5,
	alltik = 5;

function startTimeOne() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);

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
		get2d();
		getd2Table();
		tik = 5;
		$('.d2tick').text(tik);
	}

	if (alltik > 0) {
		alltik = alltik - 1;
	} else {
		try {
			alltik = 10;
			var dd2 = getToday().split('-');
			var dd3 = dd2[2] + '-' + dd2[1] + '-' + dd2[0];
			getAll(dd3);
		} catch (err) {}
	}
	var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = '0' + i;
	}
	return i;
}
$.ajaxSetup({
	cache: false,
});
$(document).ready(function () {
	try {
		$('.d2text').text(
			greetingText[Math.floor(Math.random() * greetingText.length)]
		);
	} catch (err) {}
	get2d();
	getd2Table();
});

var getting2D = null;
var rd1, rd2;

function get2d() {
	recent = $('#d21').text() + $('#d22').text();

	if (getting2D) {
		getting2D.abort();
	}
	$('#d21').html('.');
	$('#d22').html('.');
	$('#d2set').html('SET');
	$('#d2val').html('VAL');
	getting2D = $.getJSON('https://x.myanmar2d3d.com/xopen/2d.json', function (
		result
	) {
		if (result.d2.charAt(0) == rd1) {
			$('#d21').css('color', 'white');
		} else {
			$('#d21').css('color', 'dark');
		}
		if (result.d2.charAt(1) == rd2) {
			$('#d22').css('color', 'white');
		} else {
			$('#d22').css('color', 'dark');
		}

		$('#d21').html(result.d2.charAt(0));
		$('#d22').html(result.d2.charAt(1));

		rd1 = result.d2.charAt(0);
		rd2 = result.d2.charAt(1);
		$('#d2set').html('SET<br/><small>' + result.set + '</small>');
		$('#d2val').html('VAL<br/><small>' + result.val + '</small>');
		$('.d2status').html(mksttoMM(result.mkst));
		checkAll2D();
		try {
			if (recent == '..' || recent == result.d2) {
			}
		} catch (err) {}
	});
}

function mksttoMM(mkst) {
	if (mkst == 'OffHour') {
		mkst = 'ထိပ်စည်းပိတ်';
	} else if (mkst == 'Closed') {
		mkst = "<sub class='material-icons'> lock </sub> ဈေးကွက်ပိတ်";
	} else if (mkst == 'Pre-Open1') {
		mkst = "<sub class='material-icons'> schedule </sub> မနက်အကြို";
	} else if (mkst == 'Open(I)') {
		mkst = "<sub class='material-icons'> home </sub> နံနက်ဈေးကွက်";
	} else if (mkst == 'Intermission') {
		mkst = "<sub class='material-icons'> lock </sub> နံနက်ပိတ်";
	} else if (mkst == 'Pre-Open2') {
		mkst = "<sub class='material-icons'> schedule </sub> ညနေအကြို";
	} else if (mkst == 'Open(II)') {
		mkst = "<sub class='material-icons'> home </sub> ညနေဈေးကွက်";
	} else if (mkst == 'Pre-close') {
		mkst = "<sub class='material-icons'> pan_tool </sub> ညနေအကြိုပိတ်";
	}
	return mkst;
}

var req = null;

function getd2Table() {
	try {
		if (req) {
			req.abort();
		}
	} catch (err) {}
	$('#d2Table').fadeOut(200).fadeIn();
	req = $.get(
		'https://x.myanmar2d3d.com/xopen/date/' +
			getToday() +
			'.html?ts=' +
			Math.round(new Date().getTime() / 1000),
		function (data) {
			$('#d2Table').html(data);
			$('#d2Table tr[style="height:12px;"]').remove();

			$('#d2Table tr:last').prev().remove();
			$('#1230').css('color', '#000');
			$('#430').css('color', '#000');
			$('#apk930').css('color', '#000');
			$('#modern930').css('color', '#000');
			$('#internet930').css('color', '#000');
			$('#apk200').css('color', '#000');
			$('#modern200').css('color', '#000');
			$('#internet200').css('color', '#000');
		}
	);
}

function checkAll2D() {
	if (d2array.length == 0) {
	} else {
		try {
			try {
				var indexes = getAllIndexes(
					d2array,
					$('#d21').text() + $('#d22').text()
				);
				var nextPossibilities = [];

				$.each(indexes, function (i, index) {
					for (var j = index + 1; j < index + 10; j++) {
						try {
							nextPossibilities.push(d2array[j]);
						} catch (err) {}
					}
				});
				var pos = checkNextPossibility(nextPossibilities);

				var count = indexes.length;
				if (count == 0) {
					count = 1;
				}
			} catch (err) {
				$('.d2text2').text(err);
				var indexes = getAllIndexes(
					d2array,
					$('#d21').text() + $('#d22').text()
				);
				var count = indexes.length;
				if (count == 0) {
					count = 1;
				}
			}
		} catch (err) {
			$('.d2text2').text(err);
		}
	}
}

function get2dClick() {
	let name = 'Chan Lay';
	if (name > 5) {
		get2d();
		getd2Table();
	}
}

function checkNextPossibility(numbers) {
	var head = [];
	var tail = [];
	var brake = [];
	$.each(numbers, function (i, number) {
		try {
			head.push(number.charAt(0));
		} catch (err) {}
		try {
			tail.push(number.charAt(1));
		} catch (err) {}
		try {
			brake.push(Number(number.charAt(0)) + Number(number.charAt(1)));
		} catch (err) {}
	});
	return {
		head: head,
		tail: tail,
		brake: brake,
	};
}

function getMosOccurence(array) {
	if (array.length == 0) return null;
	var modeMap = {};
	var maxEl = array[0],
		maxCount = 1;
	for (var i = 0; i < array.length; i++) {
		var el = array[i];
		if (modeMap[el] == null) modeMap[el] = 1;
		else modeMap[el]++;
		if (modeMap[el] > maxCount) {
			maxEl = el;
			maxCount = modeMap[el];
		}
	}
	return maxEl;
}

function getAllIndexes(arr, val) {
	var indexes = [],
		i = -1;
	while ((i = arr.indexOf(val, i + 1)) != -1) {
		indexes.push(i);
	}
	return indexes;
}

function getAllIndexes2(arr, val) {
	var indexes = [],
		i = -1;
	while ((i = arr.indexOf(val, i + 1)) != -1) {
		indexes.push(i);
	}
	return indexes;
}

var d2all;
var d2array = [];
var rrq = null;

function getAll(date) {
	d2array = [];
	try {
		if (rrq) {
			rrq.abort();
		}
	} catch (err) {}
	rrq = $.getJSON(
		'https://x.myanmar2d3d.com/xopen/today.json?' +
			Math.floor(Date.now() / 10000),
		function (result) {
			d2all = result;
			d2array = [];
			$.each(result, function (i, field) {
				d2array.push(field.d2);
			});
		}
	);
}

function getToday() {
	var d = new Date();

	var month = d.getMonth() + 1;
	var day = d.getDate();

	var output =
		(day < 10 ? '0' : '') +
		day +
		'-' +
		(month < 10 ? '0' : '') +
		month +
		'-' +
		d.getFullYear();
	return output;
}

// 3D
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
	m = checkTimeTwo(m);
	s = checkTimeTwo(s);
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
function checkTimeTwo(i) {
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
