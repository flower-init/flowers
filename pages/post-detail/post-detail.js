// pages/post-detail/post-detail.js


import {postList} from '../../data/data.js'

const app= getApp()
console.log(app.global)


Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{},
    collected:false,
    isPlaying:false,
    _pid:null,
    _postsCollected:{},
    _mgr:null
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function (options) {
    // console.log(options)
    const postData = postList[options.pid]

    this.data._pid = options.pid
    console.log(postData)
    const postsCollected = wx.getStorageSync('posts_collected')
    this.data._postsCollected = postsCollected
    let collected = postsCollected[this.data._pid]

    if(collected === undefined){
      // 如果undenfined 说明文章从没有被收藏过
      collected = false
    }

    console.log(collected)
    console.log(postsCollected)
    
    this.setData({
      postData,
      collected,
      isPlaying:this.currenttMusicIsPlaying()
    })

    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr
    mgr.onPlay(this.onMusicStart)
    // mgr.onStop(this.onMusicStop)
    mgr.onPause(this.onMusicStop)
  },
  currenttMusicIsPlaying(){
    if(app.gIsPlayingMusic && app.gIsPlayingPostId === this.data._pid){
      return true
    }
    return false
  },
  

  onMusicStart(event){
    const mgr = this.data._mgr
    
    // mgr.onPlay(() =>{   //监听函数
    //   console.log(123)
    // })
    const music = postList[this.data._pid].music
    mgr.src = music.url
    mgr.title = music.title
    mgr.coverImgUrl = music.coverImg

    app.gIsPlayingMusic = true
    app.gIsPlayingPostId = this.data._pid

    this.setData({
      isPlaying:true
    })
  },

 

  onMusicStop(event){
    //console.log(1111)
    const mgr = this.data._mgr
    mgr.pause()
    app.gIsPlayingMusic = false
    app.gIsPlayingPostId = -1
    this.setData({
      isPlaying:false
    })
    // 音乐停止 显示 start
    // 音乐播放  stop

  },

  async onShare(event){
    const result = wx.showActionSheet({
      itemList:['分享到QQ','分享到微信','分享到朋友圈'],
      success(res){
        console.log(res)
      }
    })

  },

  async onCollect(event){
    // 假设 未收藏   点击之后 收藏
    //  哪篇文章被收藏
    // 数据结构 多篇文章是否被收藏 
    const postsCollected = this.data._postsCollected
    wx.clearStorageSync('key')
    postsCollected[this.data._pid] = !this.data.collected
    //this.data.collected = !this.data.collected
    //this.data.collected = true
      this.setData({
        collected:!this.data.collected
      })

    wx.setStorageSync('posts_collected',postsCollected)
    wx.showToast({    // 轻提示    
      //title: !this.data.collected?'取消收藏':'收藏成功',
      title: this.data.collected?'收藏成功':'取消收藏',
      duration: 3000      // 收藏成功的时间
    })
    // const result =await wx.showModal({    // 模态对话框  强提示
    //   title:'是否收藏文章'
    //   // success(res){
    //   //   console.log(res)
    //   // }
     
    // })
    // console.log(result)
    // if(result,confirm){
    //   const postsCollected = this.data._postsCollected
    // wx.clearStorageSync('key')
    // postsCollected[this.data._pid] = !this.data.collected
    // //this.data.collected = !this.data.collected
    // //this.data.collected = true
    //   this.setData({
    //     collected:!this.data.collected
    //   })

    // wx.setStorageSync('posts_collected',postsCollected)
    // }
    // {
    //   id:true|false
    // }
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