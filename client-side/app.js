
$(document).ready(function () {

    //calender
    $('#datepicker').pDatepicker({
        initialValue: false,
        format: 'YYYY/MM/DD'
    });


    // get data from server
    var count = 0;
    $.get("http://127.0.0.1:8080/mock.json", function (data) {
        var model = JSON.parse(data);

        model.Items.forEach((item, index) => {

            (item.GroupId === 1) ? getInfoQuestion(item, index)
                : getStateQuestion(item, index, count);

        });
    });

    //radio buttons
    $('#stateQuestion').on('click', 'input:radio', function () {

        var label = $('input:radio[name=' + $(this).attr('name') + ']').parent();
        label.removeClass('active-great');
        label.removeClass('active-good');
        label.removeClass('active-soso');
        label.removeClass('active-sad');

        if ($(this).parent().hasClass("icon-great")) {
            $(this).parent().addClass('active-great');
        }
        if ($(this).parent().hasClass("icon-good")) {
            $(this).parent().addClass('active-good');
        }
        if ($(this).parent().hasClass("icon-soso")) {
            $(this).parent().addClass('active-soso');
        }
        if ($(this).parent().hasClass("icon-sad")) {
            $(this).parent().addClass('active-sad');
        }
    });

    const getInfoQuestion = (item, index) => {

        $("#infoQuestion").append(`
            <div class="col-lg-6 mb-2">
                <div class="form-group row mb-2" >
                    <h1 class="col text-dark">`+ item.QuestionTitle + `</h1>
                </div>
                <div class="form-group row" id="answer` + Number(index + 1) + `">     
                </div>
            </div>             
            `);
        item.Answer.Options.forEach(option => {
            $(`#answer` + Number(index + 1) + ``).append(`
                        <div class="col-6 col-md-3 custom-control custom-checkbox">
                            <label class="col-sm-6 col-md-3 checkbox bounce px-0" for="` + option.AnswerItemId + `">
                                <span>` + option.AnswerItemTitle + `</span>
                                <input type="checkbox" id="` + option.AnswerItemId + `">
                                <svg viewBox="0 0 21 21">
                                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                </svg>
                            </label>
                        </div>
                        
            `)
        });

    };

    const getStateQuestion = (item, index) => {

        $('#stateQuestion').append(`
            
                <div class="col-lg-6 mb-2">
                    <div class="form-group row mb-3">
                        <div class="col-sm-8">
                            <h1 class="question-header">` + item.QuestionTitle + `</h1>
                        </div>
                        <div class="d-none d-sm-inline-block col-sm-4">
                            <div class="row question-state">
                                <div class="col-3">عالی</div>
                                <div class="col-3">خوب</div>
                                <div class="col-3">متوسط</div>
                                <div class="col-3">بد</div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row mb-2" id="questionTitle` + Number(index + 1) + `">
                        
                    </div>
                </div>
        `);

        item.Answer.Options.forEach(option => {
            $(`#questionTitle` + Number(index + 1) + ``).append(`            
                <div class="col-12">
                    <div class="form-group row mb-3 mb-sm-2">
                    <div class="col-12 mb-3 mb-sm-0 col-sm-auto pl-2 question-title" id="AnswerTitle` + option.AnswerItemId + `">` + (++count) + `. ` + option.AnswerItemTitle + `</div>
                    <div class="d-none d-sm-flex col dot-line"></div>
                    <div class="d-flex justify-content-start align-items-center d-sm-block col-12 col-sm-4 question-emoji">
                        <div class="mb-sm-0 row emoji-box" data-toggle="buttons">
                            <label class="col-3 icon-great">
                                <input type="radio" name="options` + option.AnswerItemId + `" value="great">
                            </label>
                            
                            <label class="col-3 icon-good">
                                <input type="radio" name="options` + option.AnswerItemId + `" value="good">
                            </label>
                            
                            <label class="col-3 icon-soso">
                                <input type="radio" name="options` + option.AnswerItemId + `" value="soso" >
                            </label>

                            <label class="col-3 icon-sad">
                                <input type="radio" name="options` + option.AnswerItemId + `" value="bad" >
                            </label>
                        </div>
                    </div>
                </div>
            `);

        });



    }



})
