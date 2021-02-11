$(document).ready(function(){
    $("input#cryto").keydown(function(){
      convert_cryto()
    });
    $(".ea").click(function() {
          $(".ccrypto_s").text($(this).text())
          $(".ccrypto_s").attr("id",$(this).attr('id') );
          convert_cryto()
    });
    $("input#baht").keydown(function(){
      convert_baht()
    });

});


const convert_cryto = () =>{
$.ajax({url: "https://api.binance.com/api/v3/avgPrice?symbol="+$(".ccrypto_s").attr("id")+"USDT", success: function(result){
          var  input =  $( "input#cryto" ).val();
          var  sume = (result.price * $( "input#cryto" ).val()*30.01).toFixed(2);//เนือกจาก Api ราคาจาก bitkubกำลังแก้ไชยุเลยขออ้างอิงราคา USDT To baht ณ วันที่ 6/2/2564
          const answer = input<= 0 ?0 :input
          $(".rep>div>.int_a").text(answer)
          $(".rep>div>.namecryp_a").text("  "+$(".ccrypto_s").text())
          const numberString = String(sume).replace(
              /^\d+/,
              number => [...number].map(
                  (digit, index, digits) => (
                      !index || (digits.length - index) % 3 ? '' : ','
                  ) + digit
              ).join('')
          );
          $(".rep>div>.int_b").text(numberString)
          $( "input#baht" ).val(sume)
          
      }});
}

const convert_baht = () =>{
$.ajax({url: "https://api.binance.com/api/v3/avgPrice?symbol="+$(".ccrypto_s").attr("id")+"USDT", success: function(result){
          var  input =  $( "input#baht" ).val();  
          var  sume = ( (input/30.01)/result.price).toFixed(8);//เนือกจาก Api ราคาจาก bitkubกำลังแก้ไชยุเลยขออ้างอิงราคา USDT To baht ณ วันที่ 6/2/2564
          const answer = input<= 0 ?0 :input
          $(".rep>div>.int_a").text(sume)
          $(".rep>div>.namecryp_a").text("  "+$(".ccrypto_s").text())
          $( "input#cryto" ).val(sume)
          const numberString = String(answer).replace(
              /^\d+/,
              number => [...number].map(
                  (digit, index, digits) => (
                      !index || (digits.length - index) % 3 ? '' : ','
                  ) + digit
              ).join('')
          );
          $(".rep>div>.int_b").text(numberString)
      }});
}