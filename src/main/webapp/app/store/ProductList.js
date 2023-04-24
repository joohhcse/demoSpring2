Ext.define('Study.store.ProductList', {
    extend: 'Ext.data.BufferedStore',
    alias : 'store.productList',
    storeId : 'productList',
    autoLoad : false,
    // fields: ['productNm', 'price', 'amount', 'rgstrDt'],
    fields: ['itemNm', 'itemPrc', 'itemAmt', 'itemRegDt'],
    proxy : {
        type : 'ajax',
        actionMethods : {
            read : 'POST'
        },
        url : '/api/list/product',
        reader : {
            type : 'json',
            rootProperty : 'data',
            totalProperty : 'totalCount'
        }
    }
});