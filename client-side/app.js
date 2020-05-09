
$(document).ready(function () {

    //calender
    $('#datepicker').pDatepicker({
        initialValue: false,
        format: 'YYYY/MM/DD'
    });

    //radio button
   

    // get data from server
    $.get("http://127.0.0.1:8080/mock.json", function (data) {
        var model = JSON.parse(data);

        model.Items.forEach((item, index) => {
            (item.GroupId === 1) ? getInfoQuestion(item, index) : getStateQuestion(item, index);
        });
    });

    $('body').on('click','input:radio',function () {
        $('input:radio[name=' + $(this).attr('name') + ']').parent().removeClass('active-great');
        $('input:radio[name=' + $(this).attr('name') + ']').parent().removeClass('active-good');
        $('input:radio[name=' + $(this).attr('name') + ']').parent().removeClass('active-soso');
        $('input:radio[name=' + $(this).attr('name') + ']').parent().removeClass('active-sad');

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
                    <div class="col-auto pl-2 question-title" id="AnswerTitle` + option.AnswerItemId + `">` + option.AnswerItemTitle + `</div>
                    <div class="col dot-line"></div>
                    <div class="col-3 col-sm-3 col-md-3">
                        <div class="row question-emoji" data-toggle="buttons">
                            <label class="col-3 icon-great">
                                <input type="radio" name="options` + option.AnswerItemId + `" value="option1">
                            </label>
                            
                            <label class="col-3 icon-good">
                                <input type="radio" name="options` + option.AnswerItemId + `" value="option2">
                            </label>
                            
                            <label class="col-3 icon-soso">
                                <input type="radio" name="options` + option.AnswerItemId + `" value="option3" >
                            </label>

                            <label class="col-3 icon-sad">
                                <input type="radio" name="options` + option.AnswerItemId + `" value="option4" >
                            </label>
                        </div>
                    </div>
                </div>
            
            
            `)
        });
    }
    
    

})
