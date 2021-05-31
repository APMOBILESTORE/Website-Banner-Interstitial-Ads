MyBanners=new Array('banner1.jpg','banner2.jpg','banner3.jpg','banner4.jpg')
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
