
$(document).ready(function () {
    $('#datepicker').pDatepicker({
        initialValue: false,
        format: 'YYYY/MM/DD'
    });
    $.get("http://127.0.0.1:8080/mock.json", function (data) {
        var model = JSON.parse(data);
        model.Items.forEach((item, index) => {

            $("#question").append(`
                <div class="col-lg-6 mb-3">
                    <div class="form-group row mb-1" >
                    <h1 class="col text-dark">`+ item.QuestionTitle + `</h1>
                    </div>
                    <div class="form-group row padding-right-large " id="answer` + index + `">     
                    </div>
                </div>             
            `);
            item.Answer.Options.forEach(option => {
                $(`#answer` + index + ``).append(`
                            <div class="col-6 col-md-3 custom-control custom-checkbox">
                                <input class="custom-control-input" type="checkbox" id="`+ option.AnswerItemId + `">
                                <label class="custom-control-label" for="`+ option.AnswerItemId + `">` + option.AnswerItemTitle + `</label>
                            </div>
                `)
            });
        });
    });


})
