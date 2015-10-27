var grid = angular.module("gridModule",["kendo.directives"]);
angular.module("AngularModule",["gridModule","accordionApp"]);
var accordian = angular.module("accordionApp",[]);

accordian.controller("SummaryController" , function($scope){
	$scope.init = function () {
		$('.sd-block').click(function(){
		   	if(! $(this).hasClass('active') ){
		   		$('.sd-block').removeClass('active');
		   		$(this).addClass('active');
		   		if( $(this).hasClass('summary') ) {
			    	$("#mytask-grid").addClass("summary");
					$("#mytask-grid").removeClass("mytask");
					$("#mytask-grid").removeClass("complete");;
			    }
			    else if ($(this).hasClass('mytask') ) {
			    	$("#mytask-grid").addClass("mytask");
					$("#mytask-grid").removeClass("complete");
					$("#mytask-grid").removeClass("summary");
			    } else if ($(this).hasClass('complete') ) {
					$("#mytask-grid").addClass("complete");
					$("#mytask-grid").removeClass("mytask");
					$("#mytask-grid").removeClass("summary");
				}
		 	}
		});
	}
});

grid.controller("mytaskGridCtrl", function($scope){
	$scope.tooltipOpt = {"a":"Approve", "m":"Modify", "r":"Reject", "position":"top"};
	$scope.mainGridOptions = {
		dataSource: [ 
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						},
						{ 
							taskId: "1234",
							Event: "Event Info Here",
							description:"Description Info Here",
							originator: "Originator Name",
							type: "Item Create",
							dateTime: "01/10/2015 8:50AM"
						}
					],
		height: 180,
		sortable: true,
		selectable: "row",
		scrollable: false,
		columnMenu: {
			columns: false,
			sortable: true
		},
		filterable: {
			extra: false,
			mode: "menu"
        },
		pageable: {
			refresh: true,
			pageSizes: true,
			buttonCount: 2,
			pageSize: 10,
			info: true,
			messages: {
			  display: " {10}"
			}
		},
		dataBound: function() {
			this.expandRow(this.tbody.find("tr.k-master-row").first());
		},
		columns: [
		{
			title: "<input type='checkbox' name='before-taskid' value=''>",
			template: "<div class='amr-checks'><input type='checkbox' class='scheck'> </div>",
		},
		{
			field: "taskId",
			title: "Task ID",
			width: 200
		}, {
			field: "Event",
			title: "Event"
		}, 
		{
			field: "description",
			title: "Description"
		},
		{
			field: "originator",
			title: "Originator"
		},  
		{
			field: "type",
			title: "Type"
		}, 
		{
			field: "dateTime",
			title: "Date / Time"
		}],
		dataBinding: function(e) {
				var $pagerRefresh = $('.k-pager-refresh').clone();
				var $grid = $('#mytask-grid.mytask');
				//$('.k-pager-refresh').remove();
				$grid.find('.k-grid-header tr th:first-child').prepend($pagerRefresh);

				$grid.find('.k-pager-wrap').wrapInner('<div class="k-pager-innerwrap"></div>');

				$grid.on('click','.scheck',function(){
					if( this.checked ){
						$(this).closest('tr').addClass('active');
						$('.approval-buttons .approve').addClass('active');
					} else {
						$(this).closest('tr').removeClass('active');
						if( $('.scheck:checked').length == 0 ) {
							$('.approval-buttons .approve').removeClass('active');
						}
					}
				})
				
				$grid.on('click','.comment-btn',function(){		
					$('.commentbox,.sm-overlay').show();
					$('.sm-overlay,.sum-lightbox .buttons button').click(function(){
						$('.commentbox,.sm-overlay').hide()
					})
				});
		}
	};

	
});

$(document).ready(function(){
	$("#select-type").on('change', function(){
		if($(this).val() == "Item Create"){
			$("#mytask-grid .filter-by ul").css('display','inline-block');
		}else if($(this).val() == "Select Type"){
			$("#mytask-grid .filter-by ul").hide();
		}
	});

	$("#mytask-grid").on('click', 'i.fa-caret-down', function(){
		$(".item-create-dropdown").hide();
		$(this).siblings(".item-create-dropdown").show();
	});
});

	/* summary ctrl */
grid.controller("summaryGridCtrl", function($scope){
$scope.mainGridOptions = {
	dataSource: [ 
				{ taskId: "12345",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Item Create",
				 DateTime: "01/10/2015 8:50AM",
				 Status:"In Progress"
				},
				{ taskId: "12345",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Product Create",
				 DateTime: "01/10/2015 8:50AM",
				 Status:"In Progress"
				},
				{ taskId: "12345",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Item Maintenance",
				 DateTime: "01/10/2015 8:50AM",
				 Status:"In Progress"
				},
				{ taskId: "12345",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Item Create",
				 DateTime: "01/10/2015 8:50AM",
				 Status:"In Progress"
				},
				{ taskId: "12345",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Product Create",
				 DateTime: "01/10/2015 8:50AM",
				 Status:"In Progress"
				},
				{ taskId: "12345",
				 Description: "Description Info Here",
				 Originator: "Originator Name",
				 Concept: "Offer",
				 Type: "Item Create",
				 DateTime: "01/10/2015 8:50AM",
				 Status:"In Progress"
				}],
	height: 180,
	sortable: true,
	selectable: "row",
	scrollable: false,
	columnMenu: {
		columns: false
	},
	filterable: {
		extra: false
    },
	pageable: {
		refresh: true,
		pageSizes: false,
		buttonCount: 2,
		pageSize: 5,
		info: true,
		messages: {
		  display: " {2}"
		}
	},
	dataBound: function() {
		this.expandRow(this.tbody.find("tr.k-master-row"));
	},
	columns: [
	{
		field: "taskId",
		title: "Task ID",
		width: 200
	}, {
		field: "Description",
		title: "Description"
	}, {
		field: "Originator",
		title: "Originator"
	},  {
		field: "Concept",
		title: "Concept"
	}, {
		field: "Type",
		title: "Type"
	}, {
		field: "DateTime",
		title: "Date / Time"
	},{
		field: "Status",
		title: "Status"
	},
	],
	dataBinding: function(e) {
			var $pagerRefresh = $('.k-pager-refresh').clone();
			var $grid = $('#mytask-grid.summary');
			$('.k-pager-refresh').remove();
			$grid.find('.k-grid-header tr th:first-child').prepend($pagerRefresh);

			$grid.find('.k-pager-wrap').wrapInner('<div class="k-pager-innerwrap"></div>');

			$grid.on('click','.scheck',function(){
				if( this.checked ){
					$(this).closest('tr').addClass('active');
					$('.approval-buttons').addClass('active');
				} else {
					$(this).closest('tr').removeClass('active');
					if( $('.scheck:checked').length == 0 ) {
						$('.approval-buttons').removeClass('active');
					}
				}
			});
	}
};
});



