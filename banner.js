MyBanners=new Array('ads/banner1.jpg','ads/banner2.jpg','ads/banner3.jpg','ads/banner4.jpg')
MyBannerLinks=new Array('www.up11wala.com/','www.apmobilestore.com/','www.google.com/','www.youtube.com/')
banner=0
function ShowLinks(){
document.location.href="https://"+MyBannerLinks[banner]
}function ShowBanners()
{ if (document.images)
{ banner++
if (banner==MyBanners.length) {
banner=0}
document.ChangeBanner.src=MyBanners[banner]
setTimeout("ShowBanners()",3000)
}
}
