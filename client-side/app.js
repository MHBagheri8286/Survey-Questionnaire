
$(document).ready(function () {

    //calender
    $('#datepicker').pDatepicker({
        initialValue: false,
        format: 'YYYY/MM/DD'
    });

    //radio button 
    $('label.icon-emoji-1').click(function () {

        $(this).toggleClass('icon-emoji-1-1');
        $('label.icon-emoji').removeClass('icon-emoji-2');
        $('label.icon-sad').removeClass('icon-sad-2');
        $('label.icon-sad-1').removeClass('icon-sad-3');
    });
    $('label.icon-emoji').click(function () {

        $(this).toggleClass('icon-emoji-2');
        $('label.icon-emoji-1').removeClass('icon-emoji-1-1');
        $('label.icon-sad').removeClass('icon-sad-2');
        $('label.icon-sad-1').removeClass('icon-sad-3');
    });
    $('label.icon-sad').click(function () {

        $(this).toggleClass('icon-sad-2');
        $('label.icon-emoji').removeClass('icon-emoji-2');
        $('label.icon-emoji-1').removeClass('icon-emoji-1-1');
        $('label.icon-sad-1').removeClass('icon-sad-3');
    });

    $('label.icon-sad-1').click(function () {

        $(this).toggleClass('icon-sad-3');
        $('label.icon-emoji').removeClass('icon-emoji-2');
        $('label.icon-emoji-1').removeClass('icon-emoji-1-1');
        $('label.icon-sad').removeClass('icon-sad-2');
    });

    // get data from server
    $.get("http://127.0.0.1:8080/mock.json", function (data) {
        var model = JSON.parse(data);

        model.Items.forEach((item, index) => {
            (item.GroupId === 1) ? getInfoQuestion(item, index) : getStateQuestion(item, index);
        });



    });

    const getInfoQuestion = (item, index) => {

        $("#infoQuestion").append(`
            <div class="col-lg-6 mb-2">
                <div class="form-group row mb-2" >
                    <h1 class="col text-dark">`+ item.QuestionTitle + `</h1>
                </div>
                <div class="form-group row padding-25 " id="answer` + Number(index + 1) + `">     
                </div>
            </div>             
            `);
        item.Answer.Options.forEach(option => {
            $(`#answer` + Number(index + 1) + ``).append(`
                        <div class="col-sm-6 col-md-3 custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox" id="` + option.AnswerItemId + `">
                            <label class="custom-control-label" for="` + option.AnswerItemId + `">` + option.AnswerItemTitle + `</label>
                        </div>
            `)
        });

    };

    const getStateQuestion = (item, index) => {

        $('#stateQuestion').append(`
            
                <div class="col-lg-6 mb-2">
                    <div class="form-group row mb-3">
                        <div class="col-sm-9">
                            <h1 class="question-header">` + item.QuestionTitle + `</h1>
                        </div>
                        <div class="d-none d-sm-inline-block col-sm-3">
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
                    <div class="form-group row mb-2">
                    <div class="col-auto pl-2 question-title" id="` + option.AnswerItemId + `">` + option.AnswerItemTitle + `</div>
                    <div class="col dot-line"></div>
                    <div class="col-3 col-sm-3 col-md-3">
                        <div class="row question-emoji" data-toggle="buttons">
                            <div class="col-3 emoji-great">
                                <input type="radio" name="options" id="option1" autocomplete="off">
                                <label for="options1" name="great" class="icon-emoji-1">
                                </label>
                            </div>

                            <div class="col-3 emoji-good">
                                <input type="radio" name="options" id="option2" autocomplete="off">
                                <label for="options2" name="good" class="icon-emoji">
                                </label>
                            </div>
                            <div class="col-3 emoji-soso">
                                <input type="radio" name="options" id="option3" autocomplete="off">
                                <label for="options3" name="soso" class="icon-sad">
                                </label>
                            </div>
                            <div class="col-3 emoji-sad">
                                <input type="radio" name="options" id="option4" autocomplete="off">
                                <label for="options4" name="sad" class="icon-sad-1">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            
            `)
        });
    }


})
