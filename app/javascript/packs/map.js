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
      // var bounds = new google.maps.LatLngBounds();
        for (var i in results) {
                if (results[0].geometry) {
                  // 緯度経度を取得
                  // var latlng = results[0].geometry.location;
                  map.setCenter(results[0].geometry.location);
                  // 住所を取得
                  var address = results[0].formatted_address;
                  // 検索結果地が含まれるように範囲を拡大
                  // bounds.extend(latlng);
                  // マーカーのセット
                  // setMarker(latlng);
                  // マーカーへの吹き出しの追加
                  // setInfoW(place, latlng, address);
                  // マーカーにクリックイベントを追加
                  // markerEvent();
                }
              }
            } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
              alert("見つかりません");
            } else {
              console.log(status);
              alert("エラー発生");
            }
          });
     // 中央を指定
      // map.setCenter(results[0].geometry.location);
     // GoogleMap上に立つマーカーの位置を指定
      // var marker = new google.maps.Marker({
          // map: map,
          // position: results[0].geometry.location,
      // });
      //クリックした際の情報ウィンドウ設定    
      // var contentString =
      // '<h6>お店</h6>';
      // var infowindow = new google.maps.InfoWindow({
        // content: contentString, //情報ウィンドウ内のテキスト
        // size: new google.maps.Size(350, 100) //情報ウィンドウのサイズ（幅、高さ）
      // });
      // google.maps.event.addListener(marker, 'click', function() {
        // infowindow.open(map,marker);
      // });
    // } 
  // });
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