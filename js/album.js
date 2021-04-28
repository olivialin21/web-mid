let urlStr = document.location.toString()
let jsonID = urlStr.split('?')[1];

$(document).ready(function() {
  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });

  let $templateAlbum = $('#template-photo');
  $.get('json/'+jsonID+'.json', function(data) {

    $('#album-section').append(
      '<div class="photo-album-cover col-12"><img src="'+data.image+'" alt=""><div class="photo-album-info"><div class="photo-album-title">'+data.name+'</div><div class="photo-album-text">'+data.photoNum+' 張相片 ‧ '+data.viewNum+'次檢視</div><div class="photo-album-text"><i class="fa fa-share"></i></div></div>'
    );

    for(let i=0;i<data.images.length;i++){
      let $node = $templateAlbum.html();
      // let urlJson = albumAry[i].split('/')[1];
      // let jsonName = urlJson.split('.')[0];
      $node = $node.replace('NAME_HERE',data.author);
      $node = $node.replace('IMG_HERE',data.images[i].imgurl);
      $node = $node.replace('TITLE_HERE',data.images[i].title);
      $node = $node.replace('STAR_HERE',data.images[i].likeNum);
      $node = $node.replace('MESSAGE_HERE',data.images[i].commentNum);
      // $node = $node.replace('HREF_HERE',"album.html?"+jsonName);
      $('#album-section').append($node);
    }  
  });
});
