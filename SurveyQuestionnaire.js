$(document).ready(function () {

    var $jqval = "Hello";
    $("#question").html(`
                <div class="col-sm-3 ">
                    <label class="col-form-label">هدف از سفر:</label>
                </div>
                <div class="col-sm-9  mr-4 mr-sm-0">
                    <div class="row">
                        <div class="col-3 custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox" id="leisure">
                            <label class="custom-control-label" for="leisure">تفریح</label>
                        </div>
                        <div class="col-3 custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox" id="education">
                            <label class="custom-control-label" for="education">تحصیل</label>
                        </div>
                        
                        <div class="col-3 custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox" id="business">
                            <label class="custom-control-label" for="business">کار</label>
                        </div>
                        <div class="col-3 custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox" id="other">
                            <label class="custom-control-label" for="other">غیره</label>
                        </div>
                    </div>
                </div>
    `)
})
