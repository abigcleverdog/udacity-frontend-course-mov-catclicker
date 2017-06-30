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
			view3.init();
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
		},
		update: function(name, pic, count) {
			cat = octopus.getCat();
			cat.catName = name;
			cat.catPic = pic;
			cat.clickCount = count;
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
					view3.init();
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
				view3.init();
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
	
	var view3 = {
		init: function() {
			var adm = document.getElementById("adm");
			adm.addEventListener('click', function() {
				view3.render();
			});
			var catForm = document.getElementById("cat-form");
			catForm.style.visibility = 'hidden';
		},
		render: function() {
			var catForm = document.getElementById("cat-form");
			catForm.style.visibility = 'visible';
			var name = document.getElementById("name");
			var pic = document.getElementById("picture");
			var count = document.getElementById("click");
			var cat = octopus.getCat();
			name.value = cat.catName;
			pic.value = cat.catPic;
			count.value = cat.clickCount;
			var submit = document.getElementById("submit");
			submit.addEventListener('click', function() {
				octopus.update(name.value, pic.value, count.value);
				view2.render();
			});
			var cancel = document.getElementById("cancel");
			cancel.addEventListener('click', function() {
				view3.init();
			});
		}
	};
	
	octopus.init();
	
});


