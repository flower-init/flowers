// pages/movies/movies.js


const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTherters:[],
    comingSoon:[],
    top250:[],
    searchResult:false,
    searchData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {
    
    wx.request({
      url: app.gBaseUrl + '/in_theaters?start=0&count=3',
      
      success:(res)=>{
          console.log(res)
          console.log(this)
          this.setData({
            inTherters:res.data.subjects
          })
      }
    })

    wx.request({
      url: app.gBaseUrl +  '/coming_soon?start=0&count=3',
      success:(res)=>{
          console.log(res)
          console.log(this)
          this.setData({
            comingSoon:res.data.subjects
          })
      }
    })

    wx.request({
      url:app.gBaseUrl +  '/top250?start=0&count=3',
      success:(res)=>{
          console.log(res)
          console.log(this)
          this.setData({
            top250:res.data.subjects
          })
      }
    })
  },
  onGotoMore(event){
    console.log(event)
    const type = event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type=' + type,
    })
  },
  onConfirm(event){
    this.setData({
      searchResult:true
    })
    console.log(event)
    wx.request({
      url: app.gBaseUrl +'search',
      data:{
        q:event.detail.value
      },
      success:(res)=>{
        this.setData({
          searchData:res.data.subjects
        })
      }
    })
  },
  onSearchCancel(event){
    this.setData({
      searchResult:false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})