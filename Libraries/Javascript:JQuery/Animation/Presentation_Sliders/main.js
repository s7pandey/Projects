var previous = [];
var current = [];
var future = [];
var views = [];
var zIndexActive = 10001;
var zIndexDisabled = 1;
var objects = [{
        "id": 37,
        "self": "http://www.example.com/jira/rest/agile/1.0/sprint/23",
        "state": "closed",
        "name": "sprint 1",
        "startDate": "2015-04-11T15:22:00.000+10:00",
        "endDate": "2015-04-20T01:22:00.000+10:00",
        "completeDate": "2015-04-20T11:04:00.000+10:00",
        "originBoardId": 5
    }, {
        "id": 72,
        "self": "http://www.example.com/jira/rest/agile/1.0/sprint/73",
        "state": "active",
        "name": "sprint 2"
    }, {
        "id": 72,
        "self": "http://www.example.com/jira/rest/agile/1.0/sprint/73",
        "state": "future",
        "name": "sprint 2"
    }, {
        "id": 72,
        "self": "http://www.example.com/jira/rest/agile/1.0/sprint/73",
        "state": "future",
        "name": "sprint 2"
    }, {
        "id": 72,
        "self": "http://www.example.com/jira/rest/agile/1.0/sprint/73",
        "state": "future",
        "name": "sprint 2"
    }, {
        "id": 72,
        "self": "http://www.example.com/jira/rest/agile/1.0/sprint/73",
        "state": "future",
        "name": "sprint 2"
    }

];
objects.forEach(function(index, object) {
    if (object.state == "closed") {
        previous.push(object);
    } else if (object.state == "active") {
        current.push(object);
    } else {
        future.push(object);
    }

});
var right = document.getElementById('right');
var left = document.getElementById('left');
var selected = document.getElementById('selected');
var rightButton = document.getElementById('rightButton');

$('#right').click(function() {
	$(this).addClass('loading');
	$('#selected').addClass('loading');	
	$('.segment').dimmer('show');


    var selectedRect = selected.getBoundingClientRect();
    var rightRect = right.getBoundingClientRect();
    var leftRect = left.getBoundingClientRect();


    $('#left').hide("fast");
    $('#right').animate({
        top: (selectedRect.top - rightRect.top) + "px",
        bottom: (selectedRect.bottom - rightRect.bottom) + "px",
        width: selectedRect.width + "px",
        height: selectedRect.height + "px",
    },"slow",function(){
    	$('#left').fadeIn();
    	$(this).fadeIn("slow");
    	$('.segment').dimmer('hide');
    	$(this).removeAttr('style');
    });
   
    $('#selected').animate({
        top: (leftRect.top-selectedRect.top) + "px",
        bottom: (leftRect.bottom-selectedRect.bottom)  + "px",
        width: leftRect.width + "px",
        height: leftRect.height + "px",
        opacity: 0.1
    }, "slow",function(){
    	$(this).addClass('loading');
    	$(this).fadeIn();
    	$(this).removeAttr('style');

    });


});
$('#left').click(function() {
	$(this).addClass('loading');
	$('#selected').addClass('loading');	
	$('.segment').dimmer('show');

    var selectedRect = selected.getBoundingClientRect();
    var leftRect = left.getBoundingClientRect();
    var rightRect = right.getBoundingClientRect();


    $('#right').hide("fast");


    $('#left').animate({
        top: (selectedRect.top - rightRect.top) + "px",
        bottom: (selectedRect.bottom - rightRect.bottom) + "px",
        left: "110px",
        width: selectedRect.width + "px",
        height: selectedRect.height + "px"
    },"slow",function(){
    	$('#right').fadeIn();
    	$(this).fadeIn("slow");
    	$('.segment').dimmer('hide');
    	$(this).removeAttr('style');
    });
   

    
    $('#selected').animate({
        top: (rightRect.top-selectedRect.top) + "px",
        bottom: (rightRect.bottom-selectedRect.bottom)  + "px",
        width: rightRect.width + "px",
        height: rightRect.height + "px",
        opacity: 0.1
    }, "slow",function(){
    	$(this).addClass('loading');
    	$(this).fadeIn();
    	$(this).removeAttr('style');

    });



});
