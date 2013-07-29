/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'leeme\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-copyright' : '&#xa9;',
			'icon-move' : '&#xf322;',
			'icon-equalizer' : '&#xf18e;',
			'icon-equalizer2' : '&#xf18f;',
			'icon-fastforward' : '&#xf182;',
			'icon-rewind' : '&#xf183;',
			'icon-play' : '&#xf184;',
			'icon-stop' : '&#xf185;',
			'icon-pause' : '&#xf186;',
			'icon-repeat' : '&#xf187;',
			'icon-shuffle' : '&#xf188;',
			'icon-record' : '&#xf189;',
			'icon-next' : '&#xf18a;',
			'icon-previous' : '&#xf18b;',
			'icon-eject' : '&#xf199;',
			'icon-previous2' : '&#xf198;',
			'icon-next2' : '&#xf197;',
			'icon-repeatone' : '&#xf196;',
			'icon-play2' : '&#xf17e;',
			'icon-list' : '&#xf113;',
			'icon-uniF008' : '&#xf008;',
			'icon-uniF00F' : '&#xf00f;',
			'icon-circleright' : '&#xf3c9;',
			'icon-circleup' : '&#xf3c8;',
			'icon-circledown' : '&#xf3c7;',
			'icon-circleleft' : '&#xf3c6;',
			'icon-uniF476' : '&#xf476;',
			'icon-uniF477' : '&#xf477;',
			'icon-uniF478' : '&#xf478;',
			'icon-uniF479' : '&#xf479;',
			'icon-multiply' : '&#xd7;',
			'icon-thumbnails' : '&#xf112;',
			'icon-download' : '&#xf11a;',
			'icon-power' : '&#xf11d;',
			'icon-hourglass2' : '&#xf123;',
			'icon-headphones' : '&#xf180;',
			'icon-music' : '&#xf181;',
			'icon-voice' : '&#xf18c;',
			'icon-grid' : '&#xe016;',
			'icon-eject-2' : '&#xe017;',
			'icon-volume' : '&#xe009;',
			'icon-mute' : '&#xe008;',
			'icon-play-2' : '&#xe010;',
			'icon-pause-2' : '&#xe011;',
			'icon-arrows' : '&#xe000;',
			'icon-arrows-2' : '&#xe001;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};