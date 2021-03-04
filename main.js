var 
p1 = document.getElementById('sales_1'),
p2 = document.getElementById('sales_2'),
p3 = document.getElementById('sales_3'),
c1 = document.getElementById('cust_1'),
c2 = document.getElementById('cust_2'),
c3 = document.getElementById('cust_3');
var rupiah = (ribuan)=>{
  var	reverse = ribuan.toString().split('').reverse().join(''),
  ribuan = reverse.match(/\d{1,3}/g);
  ribuan = ribuan.join('.').split('').reverse().join('');
  return ribuan;
}
function getValue() {
  var totalPos = eval(p1.value+'+'+p2.value+'+'+p3.value);
  var totalCust = eval(c1.value+'+'+c2.value+'+'+c3.value);
  var average = parseInt(eval(totalPos/totalCust));
  var textArea=document.getElementById('area_salesPerSift');
  textArea.innerHTML='Rp.'+rupiah(totalPos)+'<br/>'+'CC : '+totalCust+'<br/>'+'Avg : Rp.'+rupiah(average);
  $('#copy_salesPerSift').toggleClass('visually-hidden');
}

$('#btn_salesPerSift').click(()=>getValue())
var span = document.getElementById("area_salesPerSift");
function copyText(){
    document.execCommand("copy");
}
span.addEventListener("copy", function(event){
  event.preventDefault()
  
if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
  }
});


/**
function getCash(){
var cash1=document.getElementById('cash1');
var cash2=document.getElementById('cash2');
var cash3=document.getElementById('cash3');
var cashTotal=parseInt(eval(cash1.value+'+'+cash2.value+'+'+cash3.value));

  var cashHasil=document.getElementById('hasil2');
  cashHasil.innerHTML='Rp.'+rupiah(cashTotal);
}
  
function totalSales(){
  var ts=document.getElementById('ts1').value;
  var tc=document.getElementById('ts2').value;
  var av=parseInt(eval(ts/tc));
  var hs=document.getElementById('hasil3');
  hs.innerHTML='Rp.'+rupiah(ts)+'<br/>CC : '+rupiah(tc)+'<br/>Avg : Rp.'+rupiah(av);
}
**/