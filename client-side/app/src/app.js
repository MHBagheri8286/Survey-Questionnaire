
$(document).ready(function () {

    //calender
    $('#inputDate').pDatepicker({
        initialValue: false,
        format: 'YYYY/MM/DD'
    });

    // get data from server
    let count = 0;
    let itemcount = 0;
    let i = 0;
    let length = 0;

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
    //get data from server
    $.get("server-side/mock.json", function (data) {
        let model = JSON.parse(data);
        length = model.Items.length;

        model.Items.forEach((item) => {
            if (item.GroupId === 2 || item.GroupId === 3) itemcount++;

        });
        model.Items.forEach((item, index) => {

            (item.GroupId === 1) ? appendInfoQuestion(item, index)
                : (item.GroupId === 2) ? appendStateQuestion(item, index, ++i)
                    : appendTravelQuestion(item, index, ++i);

        });

    });

    const appendInfoQuestion = (item, index) => {

        $("#infoQuestion").append(`
            <div class="col-lg-6">
                <div class="form-group row mb-2" >
                    <h1 class="col text-dark">`+ item.QuestionTitle + `</h1>
                </div>
                <div class="form-group row" id="answer` + Number(index + 1) + `"></div>
            </div>             
            `);
        item.Answer.Options.forEach(option => {
            $(`#answer` + Number(index + 1) + ``).append(`
                        <div class="col-xs-6 custom-control mb-1 mb-md-0 custom-checkbox">
                            <label class="checkbox bounce px-0">
                                <span>` + option.AnswerItemTitle + `</span>
                                <input type="checkbox" name="` + item.QuestionName + `" value="` + option.AnswerItemName + `">
                                <svg viewBox="0 0 21 21">
                                    <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                </svg>
                            </label>
                        </div>
                        
            `)
        });

    }
    const appendStateQuestion = (item, index) => {
        id = (i <= (itemcount + 1) / 2) ? '#questionColumn1'
            : '#questionColumn2';

        $(id).append(`
            <div class="col-12 px-0">
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
                            <label class="btn col-3 icon-great">
                                <input type="radio" name="` + option.AnswerItemName + `" value="great">
                            </label>
                        
                            <label class="btn col-3 icon-good">
                                <input type="radio" name="` + option.AnswerItemName + `" value="good">
                            </label>
                        
                            <label class="btn col-3 icon-soso">
                                <input type="radio" name="` + option.AnswerItemName + `" value="soso" >
                            </label>

                            <label class="btn col-3 icon-sad">
                                <input type="radio" name="` + option.AnswerItemName + `" value="bad" >
                            </label>
                        </div>
                    </div>
                </div>
            `);

        });

    }
    const appendTravelQuestion = (item, index) => {

        id = (i <= (itemcount + 1) / 2) ? '#questionColumn1'
            : '#questionColumn2';
        $(id).append(`
            <div class="col-12 px-0">
                <div class="form-group row mb-3">
                    <h1 class="col question-header">` + item.QuestionTitle + `</h1>
                </div>
                <div class="form-group row" id="questionTitle` + Number(index + 1) + `"></div>
            </div>
        
        `);
        item.Answer.Options.forEach(option => {
            $(`#questionTitle` + Number(index + 1) + ``).append(`            
                <div class="col-12 ">
                    <div class="form-group row mb-3 mb-sm-2 ">
                        <div class="col-12 col-sm-auto pl-2 mw-100 question-title" id="AnswerTitle` + option.AnswerItemId + `">` + (++count) + `. ` + option.AnswerItemTitle + `</div>
                    </div>
                    <div class="form-group row">
                        
                            <div class="col-xs-4 custom-control custom-checkbox d-block d-xs-flex justify-content-center align-items-center mb-1 mb-sm-0">
                            
                                <label class="checkbox bounce px-0">
                                    <span>حتماً بله</span>
                                    <input type="radio" name="` + option.AnswerItemName + `" value="definitelyYes">
                                    <svg viewBox="0 0 21 21">
                                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                    </svg>
                                </label>
                            
                            </div>
                            <div class="col-xs-4 custom-control custom-checkbox d-block d-xs-flex justify-content-center align-items-center mb-1 mb-sm-0">
                                <label class="checkbox bounce px-0">
                                    <span>احتمالاً بله</span>
                                    <input type="radio" name="` + option.AnswerItemName + `" value="probablyYes">
                                    <svg viewBox="0 0 21 21">
                                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                    </svg>
                                </label>
                            </div>
                            <div class="col-xs-4 custom-control custom-checkbox d-block d-xs-flex justify-content-center align-items-center mb-1 mb-sm-0">
                                <label class="checkbox bounce px-0">
                                    <span>حتماً خیر</span>
                                    <input type="radio" name="` + option.AnswerItemName + `" value="definitelyNo">
                                    <svg viewBox="0 0 21 21">
                                        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                    </svg>
                                </label>
                            </div>                                                                                           
                    </div>
                </div>
            `);

        });
    }
<<<<<<< HEAD

    //submit data
    $('input#submitButton').click(function () {
        event.preventDefault();
        console.log($('form#surveyForm').serialize());
        $.ajax({
            url: '/upload',
            type: 'post',
            dataType: 'json',
            data: $('form#surveyForm').serialize()
        });
    });

=======
>>>>>>> cbe14328897d664b3344c403ab413fda9a2444a2
})
