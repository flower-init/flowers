// pages/more-movie/more-movie.js

const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    _type:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const type = options.type
    this._type = type
    wx.request({
      url: app.gBaseUrl + '/in_theaters?start=0&count=12',
      
      success:(res)=>{
          console.log(res)
          console.log(this)
          this.setData({
            movies:res.data.subjects
          })
      }
    })
    wx.request({
      url: app.gBaseUrl + '/coming_soon?start=0&count=12',
      
      success:(res)=>{
          console.log(res)
          console.log(this)
          this.setData({
            movies:res.data.subjects
          })
      }
    })
    wx.request({
      url: app.gBaseUrl + '/top250?start=0&count=12',
      
      success:(res)=>{
          console.log(res)
          console.log(this)
          this.setData({
            movies:res.data.subjects
          })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function(){
    let title = '电影'
    switch(this.data._type){
      case 'in_theaters':
        title='正在热映'
        break
      case 'coming_soon':
        title = '即将上映'
        break
      case 'top250':
        title = '豆瓣Top250'
        break
    }
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    wx.request({
      url: app.gBaseUrl + '/in_theaters?start=this.data.movies.length&count=12',
      
      success:(res)=>{
          console.log(res)
          console.log(this)
          this.setData({
            movies:this.data.movies.concat(res.data.subjects)
          })
          wx.showNavigationBarLoading()
      }
    })
    wx.request({
      url: app.gBaseUrl + '/coming_soon?start=12&count=12',
      
      success:(res)=>{
          console.log(res)
          console.log(this)
          this.setData({
            movies:res.data.subjects
          })
      }
    })
    wx.request({
      url: app.gBaseUrl + '/top250?start=12&count=12',
      
      success:(res)=>{
          console.log(res)
          console.log(this)
          this.setData({
            movies:res.data.subjects
          })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})