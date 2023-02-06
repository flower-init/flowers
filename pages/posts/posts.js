// pages/pasts/posts.js

//var postData = require("../../data/data.js")
//console.log(postData)

import {postList} from '../../data/data.js'
console.log(postList)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 初始值
   
  },

  /**
   * 生命周期函数--监听页面加载
   * 钩子函数 hook function
   * 顺序
   * 条件渲染 列表渲染 
   */
 async onLoad(options) {
    // setData   更新
    // 创建+更新
    // JSON
    // ES6
    console.log("onload")

    wx.setStorageSync('flag', true)
    wx.setStorageSync('flag', false)
    wx.setStorageSync('flag1',1)
    // wx.removeStorageSync('flag')
    //wx.clearStorageSync()   //清空所有缓存
    // Promise   ES7 

    wx.setStorageSync('flag', 2)

    const flag =await wx.getStorage({
       key:'flag',
      // success(value){
      //   console.log(value.data)
      // }
    })
    
    // flag.then((value)=>{
    //   console.log(value)
    // })


    console.log(flag)


    this.setData({
      posts:postList
    })
    // DOM
    // var d = document.getElementById('')
    // d.innerHtml = a
    // DOM优先
    // 框架

    //数据优先  -> 数据绑定  
    // 数据驱动
  },
  onGoToDetail(event){
   // console.log(event)
   // 事件对象 event
   // 页面与页面间数据通信 

  // ? 查询参数   多个参数直接用& 连接
   console.log(event)
   const pid = event.currentTarget.dataset.postId
   wx.navigateTo({
     url: '/pages/post-detail/post-detail?pid='+pid
   })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function() {
  //  console.log("onready")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
   // console.log("onshow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   * 条件触发
   */
  onHide:function() {
  //  console.log("onhide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload:function() {
   // console.log("onunload")
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