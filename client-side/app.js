$(document).ready(function () {
    $('#datepicker').pDatepicker({
        initialValue: true,
        format: 'YYYY/MM/DD'
    });
    $.get("http://127.0.0.1:8080/mock.json", function (data) {
        var model = JSON.parse(data);
        model.Items.forEach((item, index) => {

            $("#question").append(`
                <div class="form-group row" >
                    <label class="col-md-3  col-form-label ">`+ item.QuestionTitle + `:</label>
                    <div class="col-md-9 padding-right ">
                        <div class="row " id="answer` + index + `"> 
                        </div>
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
