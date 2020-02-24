//normal append way *minify html
$(document).ready(function() {
  
  $("#image-video-attach-btn").click(function() {
    let attachmentURL = $("#image-video-attach-url").val();
    $("#attachment").attr("src", `${attachmentURL}`);
  });
  
  $(".post-button").click(function() {
    let attachmentURL = $("#image-video-attach-url").val();
    let postText = $("#post-text").val();
    $(".fb-feed-wrapper").append(`<div class="fb-feed-template"> <div class="fb-feed-layout"> <div class="fb-post-padding"> <img src="" alt=""> <span class="username">username</span> </div><div class="feed-content"> <div class="received-post fb-post-padding"> ${postText} </div><div class="received-attachment fb-post-padding"> <img src="${attachmentURL}"></div></div><div class="feed-engagement fb-post-padding"> <button>ถูกใจ</button> </div><div class="fb-post-padding"> comment </div></div></div>`);
    
  });
});



// append template method (hidden)

//load way
// $(document).ready(function() {
//   $(".post-button").click(function() {
//     let postText = $("#post-text").val();
//     $(".fb-feed-wrapper").load("./feed.html");
//   });
// });

//normal append way *template
// $(document).ready(function() {
//   $(".post-button").click(function() {
    
//     let postText = $("#post-text").val();
//     let feedTemplate = $(".fb-feed-template").html();
    
//     $(".fb-feed-wrapper").append(feedTemplate);
//     $(".received-post").append(postText);
//     postText = "";
//   });
// });


//clone way
// $(document).ready(function() {
//   $(".post-button").click(function() {
//     let postText = $("#post-text").val();
//     $(".fb-feed-wrapper").append(function() {
//     $(".fb-post-content").clone().appendTo(".fb-feed-wrapper")
//     });
//   });
// });






// $(document).ready(function() {
//     $("#post-text").autoResize();
// });
