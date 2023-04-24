Ext.define('Study.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'main',
    controller: 'main',
    viewModel: 'main',
    layout: 'border',
    items: [{
        xtype: 'panel',
        region: 'north',
        // title: 'Market Admin'
        title: '',
        header: false,
        items: [{
            xtype: 'toolbar',
            items: [{
                xtype: 'label',
                html: '<h2>Market Admin</h2>'
            },'->',{
                xtype: 'button',
                text: 'xxx님',
                menu: [{
                    text: '비밀번호변경',
                    handler: function(btn) {
                        Ext.widget("updatePassword");
                    }
                },{
                    text: '로그아웃',
                    handler: 'logoutBtn'
                }]
            }]
        }]
    },{
        xtype: 'panel',
        split: true,
        width: 200,
        region: 'west',
        layout: 'fit',
        items: [{
            xtype: 'treelist',
            listeners: {
                selectionchange : 'menuChange'
            },
            store: {
                root: {
                    expanded: true,
                    children: [{
                        text: '상품관리',
                        iconCls: 'x-fa fa-gift',
                        expanded: true,
                        selectable: false,
                        children: [{
                            text: '상품목록',
                            page: 'productList',
                            leaf: true
                        }]
                    },{
                        text: '주문관리',
                        iconCls: 'x-fa fa-shopping-cart',
                        expanded: true,
                        selectable: false,
                        children: [{
                            text: '주문목록',
                            page: 'orderList',
                            leaf: true
                        }]
                    },{
                        text: '회원관리',
                        iconCls: 'x-fa fa-users',
                        expanded: true,
                        selectable: false,
                        children: [{
                            text: '회원목록',
                            page: 'memberList',
                            leaf: true
                        }]
                    }]
                }
            },
        }]
    },{
        xtype: 'panel',
        border: true,
        flex: 1,
        region: 'center',
        layout: 'fit',
        items: {
            xtype: 'panel',
            html: "<h2>Main DashBoard</h2>"
        }

    }]
});