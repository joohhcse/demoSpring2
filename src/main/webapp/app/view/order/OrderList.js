Ext.define('Study.view.order.OrderList', {
    extend: 'Ext.grid.Panel',
    xtype: 'orderList',
    controller: 'orderList',
    viewModel: 'orderList',
    title: 'OrderList',
    columnLines: true,
        tbar: [{
            xtype: 'textfield',
            emptyText: '주문자명을 입력하세요',
            name : 'searchValue'
        },{
            xtype: 'button',
            text: '검색',
            handler : 'searchBtn'
        }],
        columns: [{
            xtype: 'rownumberer'
        },{
            text: '주문자명',
            flex: 1,
            dataIndex: 'memberNm'
        },{
            text: '주문일',
            flex: 1,
            dataIndex: 'orderRegDt',
            renderer : function(value) {
                if(value != undefined && value != null && value != "") {
                    return Ext.util.Format.date(new Date(value), "Y-m-d H:i:s");
                }
                return value;
            }
        },{
            text: '주문상태',
            flex: 1,
            dataIndex: 'orderStatus',
            renderer : function(value) {
                if(value != undefined && value != null && value != "") {
                    if(value == "I") {
                        value = "주문완료";
                    }
                    else {
                        value = "주문취소";
                    }
                    return value;
                }
            }
        },{
            text: '제품명',
            flex: 1,
            dataIndex: 'orderNm'
        },{
            text: '수량',
            flex: 1,
            dataIndex: 'orderCnt',
            renderer : function(value) {
                return Ext.util.Format.number(value, "0,000");
            }
        },{
            text: '금액',
            flex: 1,
            dataIndex: 'orderTotalPrc',
            renderer : function(value) {
                return Ext.util.Format.number(value, "0,000");
            }
        },{
            xtype : 'widgetcolumn',
        	align : 'center',
        	flex : 1,
        	widget : {
        		xtype : 'button',
        		text : '배송정보조회',
                handler : 'openDeliveryInfo'
        		// handler : function(btn) {
                //     var record = btn.getWidgetRecord();
                // }
        	}
        }],
        bind : {
            store : '{orderList}'
        },
        bbar : {
            xtype : 'pagingtoolbar',
            displayInfo : true
        }
});