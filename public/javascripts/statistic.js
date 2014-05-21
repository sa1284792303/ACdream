
var $lang = $('#lang')
,   $list = $('#list').find('a')
,   $sort = $('a.sort')
,   $statistic = $('#statistic')
,   pid = $statistic.attr('pid')
,   sort = $statistic.attr('sort');

function go(page){
	var F = new Array(), G = new Array()
	,	lang = $lang.val();

	if (page) F.push('page'), G.push(page);
	if (lang) F.push('lang'), G.push(lang);
	if (sort) F.push('sort'), G.push(sort);

	var url = '/statistic/'+pid, flg = true;
	for (var i = 0; i < F.length; i++) {
		if (flg) {
			url += '?';
			flg = false;
		} else {
			url += '&';
		}
		url += F[i] + '=' + G[i];
	}

	window.location = url;
}

$(document).ready(function(){
	$.each($list, function(i, p){
		$(p).click(function(){
			var $li = $(this).parent();
			if ($li.hasClass('active') || $li.hasClass('disabled')) {
				return false;
			}
			go($(this).attr('id'));
		});
	});
	$.each($sort, function(i, p){
		$(p).click(function(){
			sort = i;
			go(null);
		});
	});
	$lang.change(function(){
		go(null);
	});
});

$(document).ready(function(){
	$('#chart').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		credits: {
			enabled: false
		},
		title: {
			text: 'Statistic'
		},
		tooltip: {
			pointFormat: '<b>{point.title}:{point.y}次</b><b>, {point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true
				},
				showInLegend: true
			}
		},
		series: [{
			type: 'pie',
			data: stat_data
		}]
	});
});
