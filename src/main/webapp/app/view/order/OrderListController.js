Ext.define('Study.view.order.OrderListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.orderList',
    onLoadData : function(obj) {
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        store.load();
    },
    searchBtn : function(btn) {
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        var searchValue = view.down("[name=searchValue]").getValue();
        store.getProxy().setExtraParam("searchValue", searchValue);
        store.load();
    },
    /**
     * 배송조회 버튼 클릭
     */
    openDeliveryInfo : function(btn) {
        var record = btn.getWidgetRecord();

        console.log('orderlistcontroller >> ');
        console.log(record.get("deliveryNm"));
        console.log('orderlistcontroller >> ');

        Ext.widget("selectDelivery",{
            deliveryNm : record.get("deliveryNm"),
            deliveryAddr : record.get("deliveryAddr"),
            deliveryZipcode : record.get("deliveryZipcode"),
            deliveryStatus : record.get("deliveryStatus")
        });
    }
}); 