Ext.define('Study.view.product.ProductListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productList',
    /**
     * 최초 데이터 로드
     */
    onLoadData : function(obj) {
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        store.load({
            callback : function(data) {
                console.log(data);
            }
        });
    },
    /**
     *  검색 기능
     */
    searchBtn : function(btn) {
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var store = viewModel.getStore(view['xtype']);
        store.getProxy().setExtraParam("searchValue", viewModel.get("searchValue"));
        store.load({
            callback : function(data) {
                console.log(data);
            }
        })
    },
    /**
     *  상품목록 그리드 리사이트
     */
    setGridHeight : function(obj) {
        obj.down("grid").setHeight(Ext.Element.getViewportHeight()-150);
    },
    /**
     * 상품 저장
     */
    addProduct : function(btn) {
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var url = "/api/add/product";
        
        console.log('addProduct');
        console.log(viewModel.get("itemSeq"));

        // console.log(viewModel.get("itemNm"));
        // console.log(viewModel.get("itemPrc"));
        // console.log(viewModel.get("itemAmt"));

        var params = {
            itemNm : viewModel.get("itemNm"),
            itemPrc : viewModel.get("itemPrc"),
            itemAmt : viewModel.get("itemAmt")
        };

        if(viewModel.get("itemSeq") > 0) {
            console.log("get over 0!");
        }

        /**
         * UPDATE
         */
        if(viewModel.get("itemSeq") > 0) {
            url = "/api/update/product";
            params.itemSeq = viewModel.get("itemSeq");
        }

        Ext.Ajax.request({
            url : url,
            method : 'POST',
            params : params,
            success : function(res) {
                var result = Ext.decode(res.responseText);
                // console.log("result", result);
                //정상등록
                if(result['code'] == 200) {
                    viewModel.getStore(view['xtype']).load();
                }
                else {
                    Ext.Msg.alert("알림", result['msg']);
                    return;
                }
            }
        })
    },
    /**
     * 정보수정을 위한 method
     */
    onUpdateForm : function(obj,td,cellIndex,record,tr,rowIndex,e,eOpt) {
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();

        console.log('onUpdateForm');
        console.log(record.get("itemNm"));

        viewModel.set("itemSeq", record.get("itemSeq"));
        viewModel.set("itemNm", record.get("itemNm"));
        viewModel.set("itemPrc", record.get("itemPrc"));
        viewModel.set("itemAmt", record.get("itemAmt"));

        console.log('onUpdateForm : set!');
        console.log(record.get("itemSeq"));
    },
    /**
     * 상품삭제
     */
    removeBtn : function(btn) {
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();
        var record = btn.getWidgetRecord();

        console.log('????');
        console.log(record.get("itemSeq"));
        

        Ext.Ajax.request({
            url : '/api/remove/product',
            method : 'POST',
            params : {
                itemSeq : record.get("itemSeq")
            },
            success : function(res) {
                console.log('removeBtn / success?? ');
                var result = Ext.decode(res.responseText);
                console.log(result);
                if(result['code'] == 200) {
                    viewModel.getStore(view['xtype']).load();
                } 
                else {
                    Ext.Msg.alert("알림", result['msg']);
                    return;
                }
            }
        })
    },
    /**
     * 초기화 버튼 클릭
     */
    formatBtn : function(btn) {
        var me = this;
        var view = me.getView();
        var viewModel = me.getViewModel();

        viewModel.set("itemSeq",0);
        viewModel.set("itemNm","");
        viewModel.set("itemPrc",0);
        viewModel.set("itemAmt",0);
    },
    /**
     * TEST
     */
    onUpdateForm2 : function(obj,td,cellIndex,record,tr,rowIndex,e,eOpt) {
        Ext.Msg.alert('alert', 'dblClick!');
    },
}); 