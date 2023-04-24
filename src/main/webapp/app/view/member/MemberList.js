Ext.define('Study.view.member.MemberList', {
    extend: 'Ext.grid.Panel',
    listeners : {
        boxready : 'onLoadData'
    },
    xtype: 'memberList',
    //requires: ['Ext.ux.ProgressBarPager'],
    // requires: ['Ext.ux.SlidingPager'],
    controller: 'memberList',
    viewModel: 'memberList',
    title: '회원목록 조회',
    columnLines: true,
    plugins: 'cellediting',
        tbar: [{
            xtype: 'combo',
            editable : false,
            displayField : 'key',
            valueField : 'value',
            queryMode : 'local',
            value : 'member_id',
            name : 'searchCode',
            store: {
                fields: ['key','value'],
                data: [{
                    key: '아이디',
                    value: 'member_id'
                },{
                    key: '이름',
                    value: 'member_name'
                }]
            }
        },{
            xtype: 'textfield', 
            name : 'searchValue',
            emptyText: '검색어를 입력하세요'
        },{
            xtype: 'button',
            text: '검색',
            handler : 'searchBtn'
        }],
        columns: [{
            xtype: 'rownumberer'
        },{
            text: '아이디',
            flex: 1,
            dataIndex: 'memberId',
            editor: {
                xtype: 'textfield'
            }
        },{
            text: '이름',
            flex: 1,
            dataIndex: 'memberNm',
            editor: {
                xtype: 'textfield'
            }
        },{
            text: '주소',
            flex: 1,
            dataIndex: 'memberAddr',
            editor: {
                xtype: 'textfield'
            }
        },{
            text: '가입일',
            flex: 1,
            dataIndex: 'memberRegDt',
            renderer : function(value) {
                if(value != undefined && value != null && value != "") {
                    return Ext.util.Format.date(new Date(value), "Y-m-d H:i:s");
                }
                return value;
            }
        }],
        bind: {
            store : '{memberList}'
        },
        bbar: {    
            // xtype: 'pagingtoolbar',
            // plugins: 'ux-slidingpager',
            // displayInfo: true
            xtype : 'pagingtoolbar',
            plugins : 'ux-slidingpager',
            displayInfo : true
        }
});
