$(document).ready(function () {
    this._model = {
        GroupId: 1,
        GroupTitle: "آشنایی با مسافر",
        QuestionTitle: "هدف از سفر",
        Answer: {
            MultiSelect: "false",
            Items: []
        }
    };
    $("#question").html(`
              <label class="col-md-2  col-form-label ">هدف از سفر:</label>
            <div class="col-md-10 padding-right-sm">
            <div class="form row">
                <div class="col custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="leisure">
                    <label class="custom-control-label" for="leisure">تفریح</label>
                </div>
                <div class="col custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="education">
                    <label class="custom-control-label" for="education">تحصیل</label>
                </div>

                <div class="col custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="business">
                    <label class="custom-control-label" for="business">کار</label>
                </div>
                <div class="col custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="other">
                    <label class="custom-control-label" for="other">غیره</label>
                </div>
            </div>
        </div>
     `)
})
