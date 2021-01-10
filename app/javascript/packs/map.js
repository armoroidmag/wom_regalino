var map;
var marker;
var infoWindow;
function initMap() {
        // マップ表示
        var target = document.getElementById('target');
        var centerp = {lat: 37.67229496806523, lng: 137.88838989062504};
        map = new google.maps.Map(target, {
        center: centerp,
        zoom: 15,
        });
  
  var place = document.getElementById('keyword').textContent; 
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode( { address: place }, 
    function(results, status) {
    // ステータスがOKなら
    if (status == google.maps.GeocoderStatus.OK) {
        for (var i in results) {
                if (results[0].geometry) {
                  // 緯度経度を取得
                  map.setCenter(results[0].geometry.location);
                  // 住所を取得
                  var address = results[0].formatted_address;
                  // マーカーのセット
                  var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                  });
                    google.maps.event.addListener(marker, 'click', function() {
                      infowindow.open(map,marker);
                  })
            } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
              alert("見つかりません");
            } else {
              console.log(status);
              alert("エラー発生");
            }
          }
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