module.exports = {
    getApiData(url, data, callback) {
        wx.request({
            url: url,
            data: data,
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                callback(res)
            }
        });
    }
}