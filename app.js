$(document).ready(function () {
    // this._model = {
    //     GroupId: 1,
    //     GroupTitle: "آشنایی با مسافر",
    //     QuestionTitle: "هدف از سفر",
    //     Answer: {
    //         MultiSelect: "false",
    //         Items: []
    //     }
    // };
    // $("#question").load(JSON.parse(),function(responseTxt, statusTxt, xhr){
    //     if(statusTxt == "success")
    //       alert("External content loaded successfully!");
    //     if(statusTxt == "error")
    //       alert("Error: " + xhr.status + ": " + xhr.statusText);
    //   });
    var logfile;
    $.get("mock.json", function (data) {
        this._model=JSON.parse(data);
        
        $("#question").html(`
              <label class="col-md-auto  col-form-label ">`+ this._model.Items[1].QuestionTitle +`:</label>
            <div class="col-md ">
            <div class="form row">
                <div class="col custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="leisure">
                    <label class="custom-control-label" for="leisure">`+ this._model.Items[0].Answer.Items[0].AnswerItemTitle +`</label>
                </div>
                <div class="col custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="education">
                    <label class="custom-control-label" for="education">`+ this._model.Items[1].Answer.Items[1].AnswerItemTitle +`</label>
                </div>

                <div class="col custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="business">
                    <label class="custom-control-label" for="business">`+ this._model.Items[0].Answer.Items[2].AnswerItemTitle +`</label>
                </div>
                <div class="col custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="other">
                    <label class="custom-control-label" for="other">`+ this._model.Items[0].Answer.Items[3].AnswerItemTitle +`</label>
                </div>
            </div>
        </div>
     `)
    });

    
})
