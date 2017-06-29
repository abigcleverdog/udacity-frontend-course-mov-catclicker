
var cats = [1,2,3,4,5];
var counts = new Array(cats.length).fill(0);

$('#cat-pic').on('click', function(){
	var ind = parseInt($('#cat-title').text().split(' ')[1])-1;
	counts[ind]++;
	$('#count').html(counts[ind]);
});

for (var i=1; i<=cats.length; i++) {
	var catName = 'Cat ' + i;
	var cnt = counts[i-1];
	var cat = 'cat'+i+'.jpg';
	
	var elem = document.createElement('li');
	elem.textContent = catName;
	
	elem.addEventListener('click', (function(c1, c2, c3) {
		return function() {
			$('#cat-title').html(c1);
			$('#count').html(counts[c3-1]);
			$('#cat-pic').attr('src', c2);};
	})(catName, cat, i));
	/* elem.addEventListener('click', 
	(function(catNameC, cntC, catC) {
		return function() {
			$('#cat-title').textContent = catNameC;
			
		};
	})(catName, cnt, cat)); */
	
	$('#cat-list').append(elem);
}

/* $('#pic1').prepend('<span>'+cat1+'</span>');
$('#pic2').prepend('<span>'+cat2+'</span>');

var count1 = 0;
var count2 = 0;

$('#pic1').append('<span id="cat1-cnt">'+count1+'</span>');
$('#pic2').append('<span id="cat2-cnt">'+count2+'</span>');

$('#pic1').click(function(e) {
	count1++;
	$('#cat1-cnt').text(count1);
});

$('#pic2').click(function(e) {
	count2++;
	$('#cat2-cnt').text(count2);
}); */