// this is the model
var model = {
	currentCat: null,
	'cats': [
		{
			'name': 'Cat 1',
			'count': 0,
			'image': 'images/cat1.jpg'
		},
		{
			'name': 'Cat 2',
			'count': 0,
			'image': 'images/cat2.jpg'
		},
		{
			'name': 'Cat 3',
			'count': 0,
			'image': 'images/cat3.jpg'
		},
		{
			'name': 'Cat 4',
			'count': 0,
			'image': 'images/cat4.jpg'
		},
		{
			'name': 'Cat 5',
			'count': 0,
			'image': 'images/cat5.jpg'
		}
	]
};

// the controller
var controller = {
	init: function () {
		this.setCurrentCat(0);
		view.init();
	},
	getCat: function (catNum) {
		return model.cats[catNum];
	},
	getNames: function () {
		var names = [];
		for (var c in model.cats) {
			names.push(model.cats[c].name);
		}
		return names;
	},
	increment: function () {
		model.currentCat.count++;
	},
	getCurrentCat: function () {
		return model.currentCat;
	},
	setCurrentCat: function (catNum) {
		model.currentCat = model.cats[catNum];
	},
	save: function () {
		model.currentCat.name = $('#frmName').val();
		model.currentCat.image = $('#frmURL').val();
		model.currentCat.count = $('#frmCount').val();
	}
};

var view = {
	$catList: $('#catList'),
	$catName: $('#cat-name'),
	$catImage: $('#cat-img'),
	$catCount: $('#cat-count'),
	admin: false,
	init: function () {
		this.admin = false;
		this.renderMenu();
		this.renderCat();
		this.renderAdmin();

		this.$catImage.click(function () {
			controller.increment();
			view.renderCat();
			view.renderAdmin();
		});
		$('#admin').click(function() {
			view.admin = true;
			view.renderAdmin();
		});
		$('#frmCancel').click(function() {
			view.admin = false;
			view.renderAdmin();
		});
		$('#frmSave').click(function() {
			controller.save();
			view.admin = false;
			view.renderAdmin();
			view.renderCat();
		});		
	},
	renderAdmin: function () {
		if(this.admin) {
			// show admin area
			var cat = controller.getCurrentCat();
			//console.log(cat);
			
			$('#frmName').val(cat.name);
			$('#frmURL').val(cat.image);
			$('#frmCount').val(cat.count);
			$('#adminArea').show();
		} else {
			// hide admin area
			$('#adminArea').hide();
		}
	},
	renderMenu: function () {
		var names = controller.getNames();
		var elem = null;
		this.$catList.empty();
		for (var c = 0; c < names.length; c++) {
			this.$catList.append('<li class="cat-entry">' + names[c] + '</li>');
			$('#catList > li:last').click(this.catMenuClick(c));
		}
	},
	catMenuClick: function (i) {
		return function () {
			controller.setCurrentCat(i);
			view.renderCat();
			view.renderAdmin();
		};
	},
	renderCat: function () {
		var cat = controller.getCurrentCat();

		this.$catCount.empty();
		this.$catImage.empty();
		this.$catName.empty();

		this.$catName.append(cat.name);
		this.$catImage.attr('src', cat.image);
		this.$catCount.append(cat.count);

	}
};

//console.log(controller.getNames());
//console.log(controller.getNames().length);
controller.init();
