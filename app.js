//  启动小程序 执行生命周期函数

App(
  {
    onLaunch(){
      console.log("小程序启动")
    },
    gIsPlayingMusic:false,
    gIsPlayingPostId:-1,
    gBaseUrl:"http://t.talelin.com/v2/movie"
  }

)