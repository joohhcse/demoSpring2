Ext.define('Study.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    updatePasswordBtn: function(btn) {
        Ext.widget("updatePassword");
    },
    logoutBtn: function(btn) {
        //1. 뷰포트 삭제
        btn.up("viewport").destroy();
        //2. 로그인윈도우 출력
        Ext.widget("login");
    },
    menuChange: function(obj, record) {
        var centerPage = obj.up("viewport").down("component[region=center]");
        centerPage.removeAll(true);
        centerPage.add({
            xtype: record.get("page")
        })
    }
    // loginBtn: function(btn) {
    //     console.log("로그인클릭!");
    //     btn.up("window").close();
    //     Ext.widget("main");
    // }
}); 