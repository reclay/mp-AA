const app = getApp();

Page({
    data: {
        orders: []
    },
    onLoad() {
        this.setData({
            orders: app.globalData.orders
        })
    },
    handleAddTap() {
        let orders = this.data.orders;
        orders.push({
            name: 'haha'
        })
        this.setData({
            orders
        })
        wx.setStorageSync('orders', orders);
        // this.orders.push({
        //     name: haha
        // })
        // this.setData({
        //     orders: this.orders
        // })
    },
    addOrder() {
        wx.navigateTo({
            url: '../addOrder/index'
        });
    }
})