function generateTemplateItem(bookmark) {
	return `<div class="container wholeForm">
                   <div class="panel-group">
                      <div class="panel panel-default">
                           <div class="panel-heading">
                               <div class="panel-title panelToDelete">
                                   <a href="${bookmark.url}">${bookmark.title}</a>
                                   <a><span class="glyphicon glyphicon-remove close" onclick="onDeleteBookmark(${bookmark.id})"></span></a>
                                   <a data-toggle="collapse" href="#collapse${bookmark.id}"><span class="glyphicon glyphicon-pencil edit" onclick="dom.switchToUpdate()"></span></a>
                               </div>
                           </div>
                           <div id="collapse${bookmark.id}" class="panel-collapse collapse">
                               <ul class="list-group" id="inputValues">
                                   <li class="list-group-item"><input class="form-control updateBookmarkName" type="text" value="${bookmark.title}"></li>
                                   <li class="list-group-item"><input class="form-control updateBookmarkLink" type="text" value="${bookmark.url}"></li>
                               </ul>
                               <button class="btn btn-primary updateButton" onclick="dom.onUpdate(${bookmark.id})">Update</button>
                               <button class="btn btn-danger cancelButton" data-toggle="collapse" href="#collapse${bookmark.id}">Cancel</button>
                           </div>
                       </div>
                   </div>
            </div>`;
}