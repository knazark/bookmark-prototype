'use strict';

// BOOKMARK
var Bookmark = function () {
	this.VERSION = "1.1.0";
	this.AUTHOR = "Nazar";
};

Bookmark.static = {
	URLS: {
		FETCH: 'json/bookmarks.json'
	}
};

Bookmark.prototype = Object.create(Dom.prototype);
Dom.prototype.superclass = Bookmark;

Bookmark.prototype.getBookmarks = function () {
	$.get(this.static.URLS.FETCH, function (data) {
		bookmark.getBookmarksList(data);
	});
};

Bookmark.prototype.getBookmarkById = function () {

};

Bookmark.prototype.createBookmark = function () {

};

Bookmark.prototype.updateBookmark = function (data) {
	$.post(this.static.URLS.FETCH, data, function(data){
		bookmark.getBookmarksList(data);
	});
};

Bookmark.prototype.deleteBookmark = function () {

};

// static methods
Bookmark.prototype.static = Bookmark.static;

Bookmark.prototype.init = function () {
	this.getBookmarks();
};

let bookmark = new Bookmark();
console.log(bookmark);

$(document).ready(function() {
	bookmark.init();
});
