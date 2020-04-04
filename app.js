$(document).ready(function () {
    $("#root").html(`
        <div class="container">
        <form class="text-dark">
            <div class="form-group row">
                <div class="col-md-6 mb-3  mb-md-0">
                    <div class="form-row">
                        <label for="inputName" class="col-sm-auto col-form-labal ">نام و نام خانوادگی:</label>
                        <div class="col-sm">
                            <input type="text" class="form-control" id="inputName">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ">
                    <div class="form-row">
                        <label for="inputRoute" class="col-sm-auto col-form-labal">مسیر:</label>
                        <div class="col-sm">
                            <div class="form-row">
                                <div class="col-sm-6 ">
                                    <div class="form-row">
                                        <label for="inputRouteFrom" class="col-sm-auto ">از</label>
                                        <div class="col-sm">
                                            <input type="text" class="form-control" id="inputRouteFrom">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-row">
                                        <label for="inputRouteTo" class="col-sm-auto ">به</label>
                                        <div class="col-sm">
                                            <input type="text" class="form-control" id="inputRouteTo">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-md-6 mb-3  mb-md-0">
                    <div class="form-row">
                        <label for="date" class="col-sm-auto col-form-labal">تاریخ پرواز:</label>
                        <div class="col-sm">
                            <div class="input-group " dir="ltr">
                                <input class="form-control" id="date" name="date" placeholder="mm/dd/yyyy" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-sm-3 mb-md-0">
                    <div class="form-row">
                        <label for="flightNumber" class="col-sm-auto col-form-labal">شماره پرواز:</label>
                        <div class="col-sm">
                            <div class="input-group" dir="ltr">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">W5</span>
                                </div>
                                <input class="form-control" id="flightNumber" name="flightNumber" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row " id="question">
            </div>
        </form>
    </div>
    `)
});

