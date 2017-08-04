/*$(
    function() {
        $('#calculate').click(
            function() {
                // console.log('clicked');
                var num1 = 1000000
                var num3 = 1500000
                var num2 = $('#num2').val()
                var result = +num1 / (+num2 * 12) + '年'
                
            })
    })
*/
$().ready(function() {
    var num1 = 6000000;
    var num2 = 7000000;
    var num = num1;

    $('#btn1').click(function() {
        num = num1;
    });
    $('#btn2').click(function() {
        num = num2;
    });
    $('#calculate').click(function() {
        var result = num / ($('#usernum').val() * 12) + '年';
        $('#result').val(result);
    });
});