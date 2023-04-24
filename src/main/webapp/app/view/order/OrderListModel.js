Ext.define('Study.view.order.OrderListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.orderList',
    stores : {
        orderList : {
            fields: ['productNm', 'price', 'amount', 'rgstrDt'],
            data: [{
                productNm: '지우개',
                price: 500,
                amount: 100,
                rgstrDt: new Date()
            },{
                productNm: '지우개',
                price: 500,
                amount: 100,
                rgstrDt: new Date()
            },{
                productNm: '지우개',
                price: 500,
                amount: 100,
                rgstrDt: new Date()
            },{
                productNm: '지우개',
                price: 500,
                amount: 100,
                rgstrDt: new Date()
            }]
        }
    }
});