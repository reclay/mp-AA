const moment = require('../../utils/moment');
Page({
    data: {
        date: moment().format('YYYY-MM-DD')
    },
    dateChange(e) {
        this.setData({
            date: e.detail.value
        });
    }
})