let albumAry = ['json/110619049.json','json/110719016.json','json/110719030.json','json/110719033.json','json/110719042.json','json/110819013.json','json/110819015.json','json/110819023.json','json/110819042.json'];
$(document).ready(function() {
  let $templateAlbum = $('#template-album');
  for(let i=0;i<albumAry.length;i++){
    let $node = $templateAlbum.html();
    $.get(albumAry[i], function(data) {
      $node = $node.replace('IMG_HERE',data.imgurl);
      $node = $node.replace('PHOTONUM_HERE',data.photoNum);
      $node = $node.replace('VIEWNUM_HERE',data.viewNum);
      $node = $node.replace('TEXT_HERE',data.name);
      $('#home-section').append($node);
    });
  }
});