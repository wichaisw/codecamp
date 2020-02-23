// append template method (hidden)

//load way
// $(document).ready(function() {
//   $(".post-button").click(function() {
//     let postText = $("#post-text").val();
//     $(".fb-feed-wrapper").load("./feed.html");
//   });
// });

//normal append way
$(document).ready(function() {
  $(".post-button").click(function() {
    let postText = $("#post-text").val();
    let feedTemplate = $(".fb-feed-template").html();
    
    $(".fb-feed-wrapper").append(feedTemplate);
    $(".received-post").append(postText);
  });
});

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
