let albumAry = ['json/110619049.json','json/110719016.json','json/110719017.json','json/110719030.json','json/110719033.json','json/110719042.json','json/110819013.json','json/110819015.json','json/110819023.json','json/110819028.json','json/110819037.json','json/110819042.json'];
$(document).ready(function() {
  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });

  let $templateAlbum = $('#template-album');
  for(let i=0;i<albumAry.length;i++){
    let $node = $templateAlbum.html();
    let urlJson = albumAry[i].split('/')[1];
    let jsonName = urlJson.split('.')[0];

    $.get(albumAry[i], function(data) {
      $node = $node.replace('IMG_HERE',data.imgurl);
      $node = $node.replace('PHOTONUM_HERE',data.photoNum);
      $node = $node.replace('VIEWNUM_HERE',data.viewNum);
      $node = $node.replace('TEXT_HERE',data.name);
      $node = $node.replace('HREF_HERE',"album.html?"+jsonName);
      $('#home-section').append($node);
    });
  }
});
