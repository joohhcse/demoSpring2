Ext.define('Study.view.product.ProductList', {
    extend: 'Ext.panel.Panel',
    xtype: 'productList',
    controller: 'productList',
    viewModel: 'productList',
    listeners : {
        boxready : 'onLoadData',
        resize : 'setGridHeight'
    },
    title: '상품목록 조회',
    items: [{
        xtype: 'toolbar',
        items : [{
    		xtype : 'textfield',
    		fieldLabel : '상품명',
    		name : 'itemNm',
            bind : {
                value : '{itemNm}'
            }
    	},{
    		xtype : 'numberfield',
    		fieldLabel : '가격',
    		name : 'itemPrc',
            bind : {
                value : '{itemPrc}'
            }
    	},{
    		xtype : 'numberfield',
    		fieldLabel : '재고량',
    		name : 'itemAmt',
            bind : {
                value : '{itemAmt}'
            }
    	},{
    		xtype : 'button',
    		text : '저장',
            handler : 'addProduct'
    	},{
    		xtype : 'button',
    		text : '초기화',
            handler : 'formatBtn'
    	}]
    },{
       xtype: 'grid',
       listeners : {
            celldblclick: 'onUpdateForm'
       },
       viewConfig : {
            emptyText : '상품이 존재하지 않습니다'
       },
       height : 150,
       columnLines: true,
        tbar: [{
            xtype: 'textfield',
            flex: 1,
            name: 'searchValue',
            emptyText: '찾으실 상품명을 입력하세요!!',
            bind : {
                value : '{searchValue}'
            }
        },{
            xtype: 'button',
            text: '검색',
            handler: 'searchBtn'
        }],
        columns: [{
            xtype: 'rownumberer'
        },{
            text: '상품명',
            style : 'text-align:center',
            flex: 1,
            dataIndex: 'itemNm'
        },{
            text: '가격',
            style : 'text-align:center',
            flex: 1,
            dataIndex: 'itemPrc'
        },{
            text: '재고량',
            style : 'text-align:center',
            flex: 1,
            dataIndex: 'itemAmt'
        },{
            text: '등록일',
            style : 'text-align:center',
            flex: 1,
            dataIndex: 'itemRegDt',
            renderer : function(value) {
                if(value != undefined && value != null && value != "") {
                    return Ext.util.Format.date(new Date(value), "Y-m-d H:i:s");
                }
                return value;
            }
        },{
            xtype : 'widgetcolumn',
        	text : '삭제',
        	align : 'center',
        	flex : 1,
        	widget : {
        		xtype : 'button',
        		text : '상품삭제',
        		handler : 'removeBtn'
        	}
        }],
        bind : {
            store : '{productList}'
        }
    }]
    // tbar: [{
    //     xtype: 'textfield'
    // },{
    //     xtype: 'textfield'
    // },{
    //     xtype: 'textfield',
    //     text: '등록'
    // }]
});