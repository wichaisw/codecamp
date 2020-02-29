//normal append way *minify html

$(document).ready(function() {
  // define username
  let nickname = prompt("What's your nickname?");
  while(nickname == "" || nickname == null) {
    nickname = prompt("What's your nickname?");
  };

  //click 'Photo' button to preview an image
  $("#image-video-attach-btn").click(function() {
    let attachmentUrl = $("#image-video-attach-url").val();
    $(".img-attachment").attr("src", `${attachmentUrl}`);
    if (attachmentUrl !== "") {
      $(".img-attachment").css({display: "block"});
    };
  });

  // also preview an image after press enter button, mouse leaves url form, and url value is changed.
  $("#image-video-attach-url").on({
    keydown: function(e) {
      if (e.which == 13) {
        $(".img-attachment").attr("src", `${$(this).val()}`);
        if ($(this).val() !== "") {
        $(".img-attachment").css({display: "block"});
        };
      };
    },

    mouseleave: function() {
      $(".img-attachment").attr("src", `${$(this).val()}`);
      if ($(this).val() !== "") {
        $(".img-attachment").css({display: "block"});
      };
    },

    change: function() {
      $(".img-attachment").attr("src", `${$(this).val()}`);
      if ($(this).val() !== "") {
        $(".img-attachment").css({display: "block"});
      };
    }
  });
    

  $("#post-text").on('input', function() {
    var scroll_height = $("#post-text").get(0).scrollHeight;
  
    $("#post-text").css('height', scroll_height + 'px');
  });

  // add feed if #post-text is not empty
  $(".post-button").click(function() {
    let timeStamp = new Date();
    let attachmentUrl = $("#image-video-attach-url").val();
    let postText = $("#post-text").val();
    let htmlFeed = `<div class="fb-feed-template"> <div class="fb-feed-layout"> <div class="feed-header-grid fb-post-padding"> <img src="./img/anonymous.jpg" alt="user-pic-thumbnail" class="user-pic-thumbnail"> <div class="username-box"> <span class="username">${nickname}</span> <br> ${timeStamp.toLocaleString()} </div> </div> <div class="feed-content"> <div class="received-post">${postText}</div> <div class="received-attachment"> <img src="${attachmentUrl}" class="feed-img-attachment"> </div> </div> <div class="feed-engagement fb-post-padding"> <button class="like-button">Like</button> <span></span> </div> <div class="fb-post-padding"> <form action="#" class="fb-comment-grid"> <img src="./img/anonymous.jpg" alt="user-pic-thumbnail" class="user-pic-thumbnail"> <label for="comment-text"> <textarea name="comment-text" class="comment-text" rows="2" placeholder="Write a comment..."></textarea> </label> <button class="comment-send-button"> reply </button> </form> </div> </div> </div>`

    if (postText !== "" || attachmentUrl !== "") {
      $(".fb-feed-wrapper").css({display: "flex"});
      $(".fb-feed-wrapper").prepend(htmlFeed);

      $("#post-text").val("");
      $("#image-video-attach-url").val("");
      $(".img-attachment").attr("src", "");
    } else {
      alert("You say it best,\nwhen you say nothing at all.");
    };
  });

  // like-button toggle & totalLike counter based on a class toggle
  let totalLike = 0;
  
  $(".fb-feed-wrapper").on("click", ".like-button", function() {
    let likeCounterDisplay = $(this).next();

    $(this).toggleClass("blue-liked-button");
    if ($(this).attr("class") == "like-button blue-liked-button") {
      totalLike = totalLike + 1;
      likeCounterDisplay.html(`${totalLike} liked`);
    } else if ($(this).attr("class") == "like-button") {
      totalLike = totalLike - 1;
      likeCounterDisplay.html(`${totalLike} liked`);
    };

    if (totalLike == 0) {
      likeCounterDisplay.css({"display": "none"})
    } else {
      likeCounterDisplay.css({"display" : "inline"})
    }
  });

  // press enter to reply, press shift+enter to break a line
  let timeStamp = new Date();
  $(".fb-feed-wrapper").on("keydown", ".comment-text", function(e) {
    let comment = $(this).val()
  
    if (e.which == 13 && e.shiftKey) {
      $(this).text("\n")
    }
    
    if (e.which == 13 && !e.shiftKey) {
      e.preventDefault();
      if (comment !== "" && comment !== "\n") {
        $(this).parent().children().last().after(`<div class="replied-grid"> <img src="./img/anonymous.jpg" alt="user-pic-thumbnail" class="user-pic-thumbnail"> <div class="comment-content"> <div><span class="username">${nickname}</span> ${comment}</div> <span class="feed-timestamp">${timeStamp.toLocaleString()}</span> </div> </div>`);
      } else {
        alert("You say it best,\nwhen you say nothing at all.");
      };
      $(this).val("");
    } 
  });
  
  // press this button as an alternative way to reply for tablet and mobile devices
  $(".fb-feed-wrapper").on("click", ".comment-send-button", function(e) {
    let comment = $(this).prev().children(".comment-text").val()
    e.preventDefault();
    if (comment !== "" && comment !== "\n") {
      $(this).prev().children().last().after(`<div class="replied-grid"> <img src="./img/anonymous.jpg" alt="user-pic-thumbnail" class="user-pic-thumbnail"> <div class="comment-content"> <div><span class="username">${nickname}</span> ${comment}</div> <span class="feed-timestamp">${timeStamp.toLocaleString()}</span> </div> </div>`);
    } else {
      alert("You say it best,\nwhen you say nothing at all.");
    };
    $(this).prev().children(".comment-text").val("");
  })

});



// another attempts, maybe coming back to fix them up later for learning purpose.

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
