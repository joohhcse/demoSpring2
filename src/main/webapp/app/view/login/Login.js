Ext.define('Study.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',
    controller: 'login',
    layout: 'center',
    closable: false,
    maximized: true,
    autoShow: true,
    onEsc: function() {
        return false;
    },
    items: [{
        xtype: 'form',
        layout: {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        items: [{
            xtype: 'textfield',
            name: 'adminId'
        },{
            xtype: 'textfield',
            inputType: 'password',
            name: 'adminPwd'
        },{
            xtype: 'button',
            width: 165,
            text: 'Login',
            handler: 'loginBtn'
        }]
    }]
});