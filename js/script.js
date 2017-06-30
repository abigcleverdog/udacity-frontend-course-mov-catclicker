$(function() {
	var model = {
		id: 0,
		data: [],
		init: function() {
			var catsNum = 5;
			var arr = [];
			for (var i=1; i<=catsNum; i++) {
				var cat = {
					id: i-1,
					clickCount: 0,
					catName: 'Cat ' + i,
					catPic: 'cat' + i + '.jpg'
				};
				arr.push(cat);
			}
			model.data = arr;
		}
	};

	var octopus = {
		init: function() {
			model.init();
			view1.init();
			view2.init();
		},
		getAllCats: function() {
			return model.data;
		},
		setID: function(id) {
			model.id = id;
		},
		clicked: function() {
			++model.data[model.id].clickCount;
		},
		getCat: function() {
			return model.data[model.id];
		}
	};
	
	var view1 = {
		init: function() {
			var catList = document.getElementById("cat-list");
			octopus.getAllCats().forEach(function(cat){
				var elem = document.createElement('li');
				elem.textContent = cat.catName;				
				elem.addEventListener('click', function() {
					octopus.setID(cat.id);
					view2.render();
				});
				/* elem.addEventListener('click', (function(cc) {
					return function() {
						console.log(cc);
						octopus.setID(cc.id);
						console.log(model.id);
						};
				})(cat)); */
				
				 catList.appendChild(elem);
			});			
        }
	};

	var view2 = {
		init: function() {
			var img = document.getElementById("cat-pic");
			img.addEventListener('click', function() {
				octopus.clicked();
				view2.render();
			});
			view2.render();
		},
		render: function(cat) {
			var title = document.getElementById("cat-title");
			var img = document.getElementById("cat-pic");
			var count = document.getElementById("count");
			var cat = octopus.getCat();
			title.textContent = cat.catName;
			img.src = cat.catPic;			
			
			count.textContent = cat.clickCount;
		}
	};
	
	octopus.init();
});


