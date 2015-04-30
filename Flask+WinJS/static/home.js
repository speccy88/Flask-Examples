WinJS.Application.onready = function () {
    WinJS.UI.processAll();
    
    //Handle
    var addProjectBtn = document.getElementById("addProject");
    var currentProjectBtn = document.getElementById("viewCurrentProjects");
    var oldProjectBtn = document.getElementById("viewOldProjects");
    var currentProjectList = document.getElementById("currentProjectList");
    var oldProjectList = document.getElementById("oldProjectList");
    
    //Init
    currentProjectList.winControl.hide()
    oldProjectList.winControl.hide()

    //Event Listener
    currentProjectBtn.addEventListener("click", DisplayCurrent, false);
};

WinJS.Application.start();

function DisplayCurrent() {
    var currentProjectList = document.getElementById("currentProjectList");
    var oldProjectList = document.getElementById("oldProjectList");
    
    currentProjectList.show()
    oldProjectList.hide()
}

function ShowAddTaskFlyout() {
    var addTaskBtn = document.getElementById("addTask");
    document.getElementById("addTaskFlyout").winControl.show(addTaskBtn, "right");
}