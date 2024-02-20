$(document).ready(function () {
    $(document).on('click', '#get_advice', function (e) {
        e.preventDefault();
        var get_advice = 'https://api.adviceslip.com/advice';
        $.ajax({
            url: get_advice,
            type: 'GET',
            dataType: 'json',
            error: (err) => {
                console.log(err);
            },
            success: (resp) => {
                $('#advice_id').text(' # ' + resp.slip.id)
                $('#advice').text('"' + resp.slip.advice + '"')
            }
        }
        )
    })
})