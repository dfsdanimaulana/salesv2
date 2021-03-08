$(function(){
  const rp = num => {
    return num.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('');
  }
  $('#btn_salesPerSift').click(function(){
    const sales = [$('#sales_1').val(), $('#sales_2').val(), $('#sales_3').val()];
    const cust = [$('#cust_1').val(), $('#cust_2').val(), $('#cust_3').val()];
    if(sales.reduce((a,b)=>a+b)==''&&cust.reduce((a,b)=>a+b)==''){
      swal('Please input your data!','','warning');
    }else if(sales.indexOf('')!=-1||cust.indexOf('')!=-1){
      swal('Please complete your data!','','warning');
    }else{
      const sum_sales = eval(sales[0]+'+'+sales[1]+'+'+sales[2]);
      const sum_cust = eval(cust[0]+'+'+cust[1]+'+'+cust[2]);
      const average = parseInt(sum_sales / sum_cust);
      const res =`Rp.${rp(sum_sales)}</br>CC : ${rp(sum_cust)}</br>Avg : ${rp(average)}`;
      $('#area_salesPerSift').html(res);
    }
  })
  $('#btn_cashDrop').click(function(){
    const cash = [$('#cash_1').val(), $('#cash_2').val(), $('#cash_3').val()];
    if(cash.reduce((a,b)=>a+b)==''){
      swal('Please input your data!','','warning');
    }else if(cash.indexOf('')!=-1){
      swal('Please complete your data!','','warning');
    }else{
      const sum_cash = rp(eval(cash[0]+'+'+cash[1]+'+'+cash[2]));
      $('#area_cashDrop').text('Rp.'+sum_cash);
    }
  })
  $('#reset_salesPerSift').click(function(){
    $('#area_salesPerSift').html('');
  })
  $('#reset_cashDrop').click(function() {
    $('#area_cashDrop').text('');
  })
});