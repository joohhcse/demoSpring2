Ext.define("Study.store.MemberList",{
	extend : 'Ext.data.Store',
	alias : 'store.memberList',
	storeId : 'memberList',
	autoLoad : true,
	field : ['memberSeq', 'memberId','memberNm','memberAddr', 'memberRegDt'],
	pageSize : 3,
	proxy : {
		type : 'ajax',
		actionMethods : {
			read : 'POST'
		},
		url : '/api/list/member',
        reader : {
            type : 'json',
            rootProperty : 'data',
            totalProperty : 'totalCount'	//totalCount (O) , total(x)
        }
	}
})