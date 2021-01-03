var map;
function initMap() {
  geocoder = new google.maps.Geocoder()
  geocoder.geocode( { 'address': $('#map').attr('class')}, function(results, status) {
    // ステータスがOKなら
    if (status == 'OK') {
     // 中央を指定
      map.setCenter(results[0].geometry.location);
     // GoogleMap上に立つマーカーの位置を指定
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location,
      });
      //クリックした際の情報ウィンドウ設定    
      var contentString =
      '<h6>We will have our ノミカイ at this restaurant!</h6>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString, //情報ウィンドウ内のテキスト
        size: new google.maps.Size(350, 100) //情報ウィンドウのサイズ（幅、高さ）
      });
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });
    } 
  });
 // 該当しなかった場合はデフォルトでNYを表示（下記ないと表示できない）
map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 40.7828, lng: -73.9653},
  zoom: 15
  });
  marker = new google.maps.Marker({
    position:  {lat: 40.7828, lng:-73.9653},
    map: map
  });
}
window.onload = function () {
  initMap();
}