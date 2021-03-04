$(function(){
  const rp = num => {
    return num.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('');
  }
  $('#btn_salesPerSift').click(function(){
    const sales = [$('#sales_1').val(), $('#sales_2').val(), $('#sales_3').val()];
    const cust = [$('#cust_1').val(), $('#cust_2').val(), $('#cust_3').val()];
    if(sales.reduce((a,b)=>a+b)==''||cust.reduce((a,b)=>a+b)==''){
      alert('please input your data!');
    }else{
      const sum_sales = eval(sales[0]+'+'+sales[1]+'+'+sales[2]);
      const sum_cust = eval(cust[0]+'+'+cust[1]+'+'+cust[2]);
      const average = parseInt(sum_sales / sum_cust);
      const res =`<p class='my-auto'>Rp.${rp(sum_sales)}</br>CC : ${rp(sum_cust)}</br>Avg : ${rp(average)}</p>`;
      $('#area_salesPerSift').html(res);
      $('#copy_salesPerSift').toggleClass('visually-hidden');
    }
    
  })
  $('#copy_salesPerSift').click(function(){
    function copyText(){
    $('#area_salesPerSift').select().text();
    document.execCommand('copy');
    }
    copyText();
  })
});
const rp = num => {
    return num.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('');
  }