var arr = [
        "https://imagevars.gulfnews.com/2019/06/10/Portugal-s-forward-Cristiano-Ronaldo_16b414d57ae_large.jpg",
        "https://compote.slate.com/images/4d3424a6-b686-4f4f-8f99-ea36b82bd589.jpeg?crop=4171%2C2781%2Cx0%2Cy0",
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/03/31/13/Cristiano-Ronaldo.jpg",
        "https://tse4.mm.bing.net/th?id=OIP.VvKcxiHmxcQPhhzvU2Q6sQHaEO&pid=Api&P=0&h=220",
        "https://cdn.wallpapersafari.com/66/63/KWtgvZ.jpg",
         "https://media.cnn.com/api/v1/images/stellar/prod/230621042149-01-cristiano-ronaldo-euro-200-apps-062023-restricted.jpg?c=original"
]
var stop1 = document.getElementById("Next")
var stop2 = document.getElementById("Previous")
var count = 0
var imagespath = 0;
var imageshow = document.getElementById("img")
function Next(){
         if(count<=5){
                      count+=1
                      imageshow.src=arr[count]
                       stop2.disabled=false
                      if(count==5){
                        stop1.disabled=true
                      }
         }
}
function Previous(){
        count -=1
        imageshow.src=arr[count]
        stop1.disabled=false
        if(count==0){
                stop2.disabled=true     
        }
}
