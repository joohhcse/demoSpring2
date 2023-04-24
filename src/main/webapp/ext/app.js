// Ext.application({
//     extend: 'HelloWorld.Application',

//     name: 'HelloWorld',

//     requires: [
//         // This will automatically load all classes in the HelloWorld namespace
//         // so that application classes do not need to require each other.
//         'HelloWorld.*'
//     ],

//     // The name of the initial view to create.
//     // mainView: 'HelloWorld.view.main.Main'
// });

// for grid
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.panel.*',
    'Ext.layout.container.Border'
]);

Ext.onReady(function() {
    var store, grid;    //, bookTplMarkup, bookTpl;

    Ext.define('Book', {
        extend: 'Ext.data.Model',
        proxy: {
            type: 'ajax',
            reader: 'xml'
        },
        fields: [
            // set up the fields mapping into the xml doc
            // The first needs mapping, the others are very basic
            { name: 'Author', mapping: '@author.name' },
            'Title',
            'Manufacturer',
            'ProductGroup',
            'DetailPageURL'
        ]
    });

    // create the grid
    grid = Ext.create('Ext.grid.Panel', {
        bufferedRenderer: false,
        // store: store,
        columns: [
            { text: "Author", width: 120, dataIndex: 'Author', sortable: true },
            { text: "Title", flex: 1, dataIndex: 'Title', sortable: true },
            { text: "Manufacturer", width: 125, dataIndex: 'Manufacturer', sortable: true },
            { text: "Product Group", width: 125, dataIndex: 'ProductGroup', sortable: true }
        ],
        forceFit: true,
        height: 210,
        split: true,
        // region: 'north'
    });

    Ext.create("Ext.panel.Panel", {
        width: 1500,
        height: 900,
        title: 'ExtJS Practice',
        renderTo: Ext.getBody(),
        layout: 'border',
        items : [
            {
            xtype: 'panel',
            // border: true,
            collapsible: false,
            flex: 1,
            region: 'west',
            items: [{
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'stretch'
                },
                autoSize: true,
                defaults: {
                    flex: 1,
                    bodyPadding: 10,
                    autoSize: true
                },
                items: [{
                    xtype: 'panel',
                    shadow: 'true',
                    title: 'panel1',
                    margin: 10
                }, {
                    xtype: 'panel',
                    shadow: 'true',
                    title: 'panel2',
                    margin: 10
                }]
            },{
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'stretch'
                },
                autoSize: true,
                defaults: {
                    flex: 1,
                    bodyPadding: 10,
                    autoSize: true
                },
                items: [{
                    xtype: 'panel',
                    shadow: 'true',
                    title: 'panel3',
                    margin: 10
                }, {
                    xtype: 'panel',
                    shadow: 'true',
                    title: 'panel4',
                    margin: 10
                }]
            }]
            },{
            xtype: 'panel',
            // border: true,
            flex: 3,
            region: 'center',
            layout: 'border',
            items: [{
                xtype: 'panel',
                flex: 2,
                region: 'center',
                // layout: 'center',
                items: [{
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'stretch'
                    },
                    autoSize: true,
                    defaults: {
                        flex: 1,
                        bodyPadding: 10,
                        autoSize: true
                    },
                    items: [{
                        xtype: 'panel',
                        shadow: 'true',
                        title: 'grid2',
                        margin: 10,
                        flex: 3
                    }, {
                        xtype: 'panel',
                        shadow: 'true',
                        title: 'img1',
                        margin: 10,
                        flex: 1
                    }]
                },{
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'stretch'
                    },
                    autoSize: true,
                    defaults: {
                        flex: 1,
                        bodyPadding: 10,
                        autoSize: true
                    },
                    items: [{
                        xtype: 'panel',
                        shadow: 'true',
                        title: 'grid2',
                        margin: 10,
                        flex: 3
                    }, {
                        xtype: 'panel',
                        shadow: 'true',
                        title: 'img2',
                        margin: 10,
                        flex: 1
                    }]
                }]
            }]
        }]
    })

    Ext.create("Ext.panel.Panel",{
        width : 500,
        height : 500,
        renderTo : Ext.getBody(),
        layout : 'fit',
        items : [{
            xtype : 'cartesian',
            store : {
                fields : ['subject','score'],
                data : [{
                    subject : '국어',
                    score : 100
                },{
                    subject : '영어',
                    score : 46
                },{
                    subject : '수학',
                    score : 82
                },{
                    subject : '과학',
                    score : 55
                },{
                    subject : '사회',
                    score : 23
                }]
            },
        //
            axes : [{
          //Y
                type : 'numeric',
                position : 'left',
                title : '(점)'
            },{
          //X 
                type : 'category',
                poistion : 'bottom'
            }],		
        series : {
          //CHART TYPE
                type : 'bar',
          //X FIELD
                xField : 'subject',
          //Y FIELD
                yField : 'score'
            }
        }]
    })

})
