var allCats = [
  {url: "https://farm2.staticflickr.com/1126/625069434_db86b67df8_b.jpg",
  name: "Xuxa"},
  {url: "https://farm3.staticflickr.com/2298/2290467335_89067c7b51_b.jpg",
  name: "Chewie"},
  {url: "https://farm8.staticflickr.com/7401/16393044637_72e93d96b6_b.jpg",
  name: "Sunny"},
  {url: "https://farm9.staticflickr.com/8208/8216315457_28762c496d_b.jpg",
  name: "Danny"},
  {url: "https://farm6.staticflickr.com/5704/20443802614_d0b0c0b5c5_b.jpg",
  name: "Yoann"},
];
var $catsElem = $('#cats');
var $listElem = $('#catlist');

var showCat = function( name ) {
  catName = name.currentTarget.className;

  $('div.' + catName ).toggleClass("hidden");
}

var loadCats = function() {
  var numCats = allCats.length;
  var nowCat;

  for( var i = 0; i < numCats; i++ ) {
    nowCat = allCats[i];
    name = nowCat.name;

    //add cat to sidebar list
    $listElem.append('<li><a class="' + name + '" href="#">' + name + '</a></li>');

    //add cat to body - hidden
    $catsElem.append('<div class="catpic hidden ' + name + '"><h3>' + name + '</h3><img src=' + nowCat.url + '/><p>Score: <span>0</span></p></div>');

    console.log( $('a.' + name ) );

    $('a.' + name ).click( function( name ) {
      return showCat( name );
    });
  }
}

loadCats();

$('.catpic img').click( function( e ) {
  var $scoreElem = $(this).next().find( 'span' );
  var score = parseInt( $scoreElem[0].textContent, 10 ) + 1 ;

  console.log('score: ' + score );
  $scoreElem.text( score );
});
