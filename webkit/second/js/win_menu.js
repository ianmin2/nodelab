//get node webkit GUI
var gui = require('nw.gui');
// get the window object
var win = gui.Window.get();
var menubar = new gui.Menu({
    type: 'menubar'
});
var file = new gui.Menu();
file.append(new gui.MenuItem({
    label: 'Action 1',
    click: function() {
        alert('Action 1 Clicked');
    }
}));
file.append(new gui.MenuItem({
    label: 'Action 2',
    click: function() {
        alert('Action 2 Clicked');
    }
}));
menubar.append(new gui.MenuItem({ label: 'File', submenu: file}));
win.menu = menubar;

/*

//get node webkit GUI
var gui = require('nw.gui');
// get the window object
var win = gui.Window.get();
var menubar = new gui.Menu({
type: 'menubar'
});
var file = new gui.Menu();
var subMenu = new gui.Menu();
file.append(new gui.MenuItem({
label: 'Action 1',
click: function() {
alert('Action 1 Clicked');
}
}));
file.append(new gui.MenuItem({
label: 'Action 2',
click: function() {
alert('Action 2 Clicked');
}
}));
subMenu.append(new gui.MenuItem({
label: 'SubMenu Action 1',
click: function() {
alert('SubMenu Action 1 Clicked');
}
}));
subMenu.append(new gui.MenuItem({
label: 'SubMenu Action 2',
click: function() {
alert('SubMenu Action 2 Clicked');
}
}));
menubar.append(new gui.MenuItem({ label: 'File', submenu: file}));
file.append(new gui.MenuItem({ label: 'Sub Action Menu', submenu: subMenu}));
win.menu = menubar;

*/