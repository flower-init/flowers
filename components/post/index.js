// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    res:Object
    
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(event){
      // console.log(event)
      // 事件对象 event
      // 页面与页面间数据通信 
   
    //  // ? 查询参数   多个参数直接用& 连接
    //   console.log(event)
    //   const pid = event.currentTarget.dataset.postId
    //   wx.navigateTo({
    //     url: '/pages/post-detail/post-detail?pid='+pid
    //   })
    this.triggerEvent('posttap')
     },
  }
})
