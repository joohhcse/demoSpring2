/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Study.Application', {
    extend: 'Ext.app.Application',

    name: 'Study',

    stores: [
        'MenuList'
    ],

    launch: function() {
        Ext.Ajax.request({
            url: '/api/sessionCheck',
            method: 'POST',
            success: function(res) {
                var api = Ext.decode(res.responseText);
                console.log('applicationJs!');
                console.log(api['code']);

                //로그인 실패 = login
                if(api['code'] == 999) {
                    Ext.widget("login");
                }
                else {
                    Ext.widget("main");
                }
                // console.log(api['code']);
            }
        });
        // Ext.widget("login");
        //Ext.create("Study.view.login.Login");
    },

    // quickTips: false,
    // platformConfig: {
    //     desktop: {
    //         quickTips: true
    //     }
    // },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
