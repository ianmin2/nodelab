/* TRAY ICONS */

    // Create a tray icon
    var tray = new gui.Tray({
        icon : 'icon.png',
        title: 'App Tray'
    });
    // Give it a menu
    var menu = new gui.Menu();
    menu.append(new gui.MenuItem({
        type: 'checkbox',
        label: 'Are you sure?'
    }));
    tray.menu = menu;




/* CLIPBOARD ISSUES */

    // Clipboard
    // We can not create a clipboard, we have to receive the system clipboard
    var clipboard = gui.Clipboard.get();
    // Read from clipboard
    var text = clipboard.get('text');
    alert('Clipboard text : '+text);


/* package.json  */

{
    "name": "diskDBApp",
        "version": "0.0.1",
            "description": "A diskDB Node webkit app ",
                "main": "index.html",
                    "window": {
                        "title": "diskDB App",
                            "toolbar": true,
                                "resizable": false,
                                    "width": 800,
                                        "height": 500,
                                            "min_width": 400,
                                                "min_height": 200,
                                                    "max_width": 800,
                                                        "max_height": 600,
                                                            "position": "mouse"
                    },
                        "webkit": {
                            "plugin": false,
                                "java": false,
                                    "page-cache": false
                        },
                            "scripts": {
                                "test": "echo \"Error: no test specified\" && exit 1"
                            },
                                "author": "",
                                    "license": "MIT",
                                        "dependencies": {
                                            "diskdb": "^0.1.12"
                                        }
}