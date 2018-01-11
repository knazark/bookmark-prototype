'use strict';

// DOM
var Dom = function () {
	// variables copy code
	this.$body = $('body');
	this.$content = $('#content');
	this.$formCreate = $('#form-create');
	this.$listCategories = $('#list-categories');
};

Dom.prototype.getBookmarksList = function (data) {
	document.getElementById('bookmarkList').innerHTML = data.map(item => generateTemplateItem(item)).join('');
};

let dom = new Dom();

console.log(dom);

// DOM template
dom.switchToUpdate = function () {
	let panelsCollapse = document.getElementsByClassName('collapse');

	for (let i = 0; i < panelsCollapse.length; i++){
		let classes =  panelsCollapse[i].className;
		classes = classes.trim().split(' ');

		for (let j = 0; j < classes.length; j++){
			if (classes[j] === 'in'){
				delete classes[j];
				break;
			}
		}
		panelsCollapse[i].className = classes.join(' ');
	}
};
dom.onUpdate = function (id) {
	let form = document.getElementById(`collapse${id}`);
	let nameElem = form.querySelector('.updateBookmarkName');
	let linkElem = form.querySelector('.updateBookmarkLink');
	let name = nameElem.value;
	let link = linkElem.value;

	dom.superclass.prototype.updateBookmark({id: id, name: name, link: link, categoryid: '1', action: 'edit'});
};