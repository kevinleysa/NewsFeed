/*
 * File: app/store/notify.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('NewsFeed.store.notify', {
    extend: 'Ext.data.Store',

    requires: [
        'NewsFeed.model.notify',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'NewsFeed.model.notify',
            storeId: 'notify',
            data: [
                {
                    image: 'Hello World!',
                    type: 'Message',
                    title: 'Coding of notify page updated',
                    datetime: '7/11/2013',
                    user: 'Loreyza',
                    notify: 'Hello Kei, I updated coding of notify page of Linspira site, do you see?'
                },
                {
                    image: 'Hello World!',
                    type: 'Idea',
                    title: 'USB Security',
                    datetime: '7/11/2013',
                    user: 'Keiichi Suzuki',
                    notify: 'Hello friend, I want to create a USB security, user can lock their USB by set password.'
                }
            ],
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});