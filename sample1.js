function sample1(){
    var canvas1 = document.getElementById("canvas1");
    var context1 = canvas1.getContext("2d");
    /*context1.fillStyle = '#FF0000';
    context1.fillRect(0,0, canvas1.width,canvas1.height);*/
    var A = new hichart('Bar',context1,canvas1,{
		series:[{
			data:[14, 7, 4.2, 4, 3.5, 14, 7, 4.2, 4, 3.5, 8, 5.5],
			color: "#d9406f",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#2dc4f6"}]
		},{
			data:[0, 2, 4.2, 4, 3.5, 0, 1, 4.2, 4, 3.5, 2, 5.5],
			color: "#4e94ab",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})
	
	var canvas2 = document.getElementById("canvas2");
    var context2 = canvas2.getContext("2d");
	/*context2.fillStyle = '#00FF00';
    context2.fillRect(0,0, canvas2.width,canvas2.height);*/
    var B = new hichart('Line',context2,canvas2, {
		sections:12,
		columnSize: 40,
		rowSize: 40,
		Val_max:130,
		Val_min:-40,
		stepSize:10,
		xAxis:{
			label:{
				enableRotate: true,
				rotate: 60,
				textBaseline: 'top',
				textAlign: 'right'
			},
			categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		series:[
			{
				data:[30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99, 130],
				color: "#d9406f",
				linearGradient:[{position:0,color:"#000000"},{position:1,color:"#2dc4f6"}]
			},
			{
				data:[20, -10, -20, -25, -40, 5, 10, 28, 30, 43, 65, 80],
				color: "#4e94ab",
				linearGradient:[{position:0,color:"#000000"},{position:1,color:"#4e94ab"}]
			}
		]
	})
	
	var canvas3 = document.getElementById("canvas3");
    var context3 = canvas3.getContext("2d");
    // var C = new hichart('Pie',context3,{x:0,y:0,width:300,height:300},{
	// 	sections:1,
	// 	Val_max: 1,
	// 	Val_min: 0,
	// 	columnSize:0,
	// 	rowSize:0,
	// 	margin:0,
	// 	xAxis:{
	// 		showGrid: false,
	// 		gridLineWidth: 0
	// 	},
	// 	yAxis:{
	// 		showGrid: false,
	// 		gridLineWidth: 0
	// 	}
	// })

	var A = new hichart('Pie',context3,{x:0,y:0,width:300,height:300},{
		margin:5,
		series:[{
			text:{
				enable:true
			},
			data: [ 
                {value: 14, name: '直接访问'},
                {value: 7, name: '邮件营销', linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]},
                {value: 4.2, name: '联盟广告'},
                {value: 4, name: '视频广告'},
                {value: 3.5, name: '搜索引擎'}
            ],
			color: "#555555",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})

	
	var canvas5 = document.getElementById("canvas5");
    var context5 = canvas5.getContext("2d");
	var D = new hichart('StackedBar',context5,canvas5,{
		series:[{
			data:[14, 7, 4.2, 4, 3.5, 14, 7, 4.2, 4, 3.5, 8, 5.5],
			color: "#d9406f",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		},{
			data:[0, 2, 4.2, 4, 3.5, 0, 1, 4.2, 4, 3.5, 2, 5.5],
			color: "#4e94ab",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#edc214"}]
		}]
	})

	var canvas6 = document.getElementById("canvas6");
    var context6= canvas6.getContext("2d");
	var data = [];
	for (var i = 0; i <= 100; i++) {
		var theta = i / 100 * 360;
		var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
		data.push([r, theta]);
	}
    var A = new hichart('Polar',context6,{x:0,y:0,width:300,height:300},{
		sections:1,
		Val_max: 10,
		Val_min: 0,
		stepSize:2,
		margin:10,
		series:[{
			data: data,
			color: "#d9406f",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})

	var canvas7 = document.getElementById("canvas7");
    var context7= canvas7.getContext("2d");
    var A = new hichart('BasicPie',context7,{x:0,y:0,width:300,height:300},{
		margin:5,
		series:[{
			text:{
				enable:true
			},
			data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销', linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]},
                {value: 234, name: '联盟广告', radialGradient:[{position:0,color:"#000000"},{position:1,color:"#64A3D8"}]},
                {value: 135, name: '视频广告'},
                {value: 248, name: '搜索引擎'}
            ],
			color: "#555555",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})
	
	var canvas8 = document.getElementById("canvas8");
    var context8 = canvas8.getContext("2d");
	/*context2.fillStyle = '#00FF00';
    context2.fillRect(0,0, canvas2.width,canvas2.height);*/
    var B = new hichart('Area',context8,canvas8, {
		sections:12,
		Val_max:130,
		Val_min:-40,
		stepSize:10,
		xAxis:{
			categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		series:[
			{
				data:[30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99, 130],
				color: "#2dc4f6",
				linearGradient:[{position:0,color:"rgba(0,0,0,0.2)"},{position:1,color:"#2dc4f6"}]
			}
		]
	})

	var canvas9 = document.getElementById("canvas9");
    var context9 = canvas9.getContext("2d");
	/*context2.fillStyle = '#00FF00';
    context2.fillRect(0,0, canvas2.width,canvas2.height);*/
    var B = new hichart('Area',context9,canvas9, {
		sections:12,
		Val_max:130,
		Val_min:-40,
		stepSize:10,
		xAxis:{
			categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		series:[
			{
				data:[20, -10, -20, -25, -40, 5, 10, 28, 30, 43, 65, 80],
				color: "#4e94ab"
			}
		]
	})

	var canvas10 = document.getElementById("canvas10");
    var context10 = canvas10.getContext("2d");
	/*context2.fillStyle = '#00FF00';
    context2.fillRect(0,0, canvas2.width,canvas2.height);*/
    var B = new hichart('StackedArea',context10,canvas10, {
		sections:12,
		Val_max:130,
		Val_min:0,
		stepSize:10,
		xAxis:{
			categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		series:[{
			data:[10,20,30,40,50,60,45,25,35,45,55,65],
			color: "#d9406f",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		},{
			data:[10,20,30,40,50,60,15,25,55,45,55,65],
			color: "#4e94ab",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#edc214"}]
		}]
	})


	var canvas11 = document.getElementById("canvas11");
    var context11 = canvas11.getContext("2d");
	var data = [];
	for (var i = 0; i <= 360; i++) {
		var t = i / 180 * Math.PI;
		var r = Math.sin(2 * t) * Math.cos(2 * t);
		data.push([r, i]);
	}

    var A = new hichart('Polar',context11,{x:0,y:0,width:300,height:300},{
		margin:5,
		Val_max: 0.5,
		Val_min: 0,
		stepSize: 0.1,
		series:[{
			data: data,
			color: "#d9406f",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
    })
    
    var canvas12 = document.getElementById("canvas12");
    var context12 = canvas12.getContext("2d");
	/*context2.fillStyle = '#00FF00';
    context2.fillRect(0,0, canvas2.width,canvas2.height);*/
    var B = new hichart('Radar',context12,canvas12, {
        radar: {
            // shape: 'circle',
            name: {
                enable: true,
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: 'sales', max: 6500},
                { name: 'Administration', max: 16000},
                { name: 'Information Techology', max: 30000},
                { name: 'Customer Support', max: 38000},
                { name: 'Development', max: 52000},
                { name: 'Marketing', max: 25000}
            ]
        },
		series:[
			{
				data:[4300, 10000, 28000, 35000, 50000, 19000],
				color: "#d9406f"
            },
            {
				data:[5000, 14000, 28000, 31000, 42000, 21000],
				color: "#edc214"
			}
		]
	})

	
	var canvas13 = document.getElementById("canvas13");
    var context13 = canvas13.getContext("2d");
	/*context2.fillStyle = '#00FF00';
    context2.fillRect(0,0, canvas2.width,canvas2.height);*/
    var B = new hichart('BZLine',context13,canvas13, {
		sections:12,
		columnSize: 40,
		rowSize: 40,
		Val_max:130,
		Val_min:-40,
		stepSize:10,
		xAxis:{
			label:{
				enableRotate: true,
				rotate: 60,
				textBaseline: 'top',
				textAlign: 'right'
			},
			categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		series:[
			{
				data:[30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99, 130],
				color: "#d9406f",
				linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
			},
			{
				data:[20, -10, -20, -25, -40, 5, 10, 28, 30, 43, 65, 80],
				color: "#4e94ab",
				linearGradient:[{position:0,color:"#000000"},{position:1,color:"#4e94ab"}]
			}
		]
	})

	var canvas14 = document.getElementById("canvas14");
    var context14= canvas14.getContext("2d");
    var A = new hichart('PhaseSequence',context14,{x:0,y:0,width:300,height:300},{
		margin:5,
		series:[{
			text:{
				enable:true
			},
			data: [
				{ value: 50, degree: 0, max: 100, min: 0, distance: 1, radialGradient:[{position:0,color:"#000000"},{position:0.5,color:"#A7CC61"}] },
				{ value: 60, degree: 30, max: 100, min: 0, distance: 1, radialGradient:[{position:0,color:"#000000"},{position:0.5,color:"#64A3D8"}] },
				{ value: 70, degree: 60, max: 100, min: 0, distance: 1, radialGradient:[{position:0,color:"#000000"},{position:0.5,color:"#ED4853"}] },
				{ value: 80, degree: 90, max: 100, min: 0,  distance: 0, radialGradient:[{position:0,color:"#000000"},{position:0.5,color:"#FFDD5C"}] },
				{ value: 90, degree: 120, max: 100, min: 0,  distance: 0, radialGradient:[{position:0,color:"#000000"},{position:0.5,color:"#FF834D"}] },
				{ value: 100, degree: 150, max: 100, min: 0,  distance: 0, radialGradient:[{position:0,color:"#000000"},{position:0.5,color:"#C4B7DA"}] }
			],
			color: "#555555",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}],
		colorList: ["#A7CC61", "#64A3D8", "#ED4853", "#FFDD5C", "#FF834D", "#C4B7DA", "#AEC18B", "#7D9DB7", "#B46267", "#ECDB9B", "#D19378", "#C2BBCD"]
	})



	var testData = [
        {times: [{"starting_time": 1355752800000, "ending_time": 1355759900000}, {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
        {times: []},
        {times: [{"starting_time": 1355759910000, "ending_time": 1355761900000} ]},
        {times: [{"starting_time": 1355761910000, "ending_time": 1355763910000}]}
    ];

    var testData1 = [
        {times: [{"starting_time": 1355762800000, "ending_time": 1355769900000}, {"starting_time": 1355777900000, "ending_time": 1355784400000}]},
        {times: [{"starting_time": 1355769910000, "ending_time": 1355771900000}, ]},
        {times: [{"starting_time": 1355771910000, "ending_time": 1355773910000}]}
	];

	var canvas15 = document.getElementById("canvas15");
    var context15 = canvas15.getContext("2d");
	var B = new hichart('TimelineMulti',context15,canvas15, {
		series:[
			{label:"tag1",data:testData},
			{label:"tag2",data:testData1}
		]
	});
	
	var canvas16 = document.getElementById("canvas16");
    var context16 = canvas16.getContext("2d");
	var B = new hichart('TimelineMulti',context16,canvas16, {
		timeline:{
			type:{type:"multiTimeLine"}
		},
		series:[
			{label:"tag1",data:testData},
			{label:"tag2",data:testData1}
		]
	});
	
	var canvas17 = document.getElementById("canvas17");
    var context17 = canvas17.getContext("2d");
    var B = new hichart('TimelineMulti',context17,canvas17, {
		series:[
			{label:"tag1",data:testData}
		]
	});


	var value = [
		{ value: 50 },
		{ value: 80 },
		{ value: 30 },
		{ value: 70 },
		{ value: 60 },
		{ value: 10 }
	];
	  
	var value1 = [
		{ value: 63 }
	];

	var canvas18 = document.getElementById("canvas18");
    var context18 = canvas18.getContext("2d");
    var B = new hichart('LinearGauge',context18,canvas18, {
		Val_max: 100,
		Val_min: -100,
		linearGauge:{
			type: { type: "circle" }, 
			label: { type: "textCloud"} 
		},
		series:[
			{label:"tag1",data:value1}
		]
	});

	var canvas19 = document.getElementById("canvas19");
    var context19 = canvas19.getContext("2d");
    var B = new hichart('LinearGauge',context19,canvas19, {
		Val_max: 100,
		Val_min: -100,
		linearGauge:{
			label: { type: "marker"}
		},
		series:[
			{label:"tag1",data:value}
		]
	});

	var canvas20 = document.getElementById("canvas20");
    var context20 = canvas20.getContext("2d");
    var B = new hichart('LinearGauge',context20,canvas20, {
		Val_max: 100,
		Val_min: -100,
		linearGauge:{
			type: { type: "rectangle" }, 
			label: { type: "textCloud" }, 
			orientation: "vertical"
		},
		series:[
			{label:"tag1",data:value1}
		]
	});

	var canvas21 = document.getElementById("canvas21");
    var context21 = canvas21.getContext("2d");
    var B = new hichart('LinearGauge',context21,canvas21, {
		Val_max: 100,
		Val_min: -100,
		linearGauge:{
			orientation: "vertical", 
			label: { type: "marker"}
		},
		series:[
			{label:"tag1",data:value}
		]
	});

	var canvas22 = document.getElementById("canvas22");
    var context22= canvas22.getContext("2d");
    var A = new hichart('DoughnutPie',context22,{x:0,y:0,width:300,height:300},{
		margin:5,
		series:[{
			text:{
				enable:true
			},
			data: [
                {value: 335, name: '直接访问', radialGradient:[{position:0,color:"#000000"},{position:1,color:"#ECDB9B"}]},
                {value: 310, name: '邮件营销', linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]},
                {value: 234, name: '联盟广告', radialGradient:[{position:0,color:"#000000"},{position:1,color:"#64A3D8"}]},
                {value: 135, name: '视频广告', radialGradient:[{position:0,color:"#000000"},{position:1,color:"#D19378"}]},
                {value: 248, name: '搜索引擎', radialGradient:[{position:0,color:"#000000"},{position:1,color:"#C2BBCD"}]}
            ],
			color: "#555555",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})

	var option23 = {
		lineWidth: 5,
		max : 1000,
		min : 0,
		color : "#808080",
		tick : {
			enable:true,
			tickInterval : 100
		},
		type : {
			type : "rangeBar"
		},
		rangeContainer : {
			ranges : [{
				"startValue" : 100,
				"endValue" : 200,
				"color" : "#A7CC61"
			}, {
				"startValue" : 400,
				"endValue" : 600,
				"color" : "#ED4853"
			}]
		},
		bgcolor : "#222",
		startAngle : 0,
		endAngle : 360,
		counterclockwise : false
	};

	var value = [{
		color : "lightgreen",
		value : 500
	}, {
		color : "lightblue",
		value : 850
	}, {
		color : "red",
		value : 150
	}];

	var canvas23 = document.getElementById("canvas23");
    var context23= canvas23.getContext("2d");
    var A = new hichart('Gauge',context23,{x:0,y:0,width:300,height:300},{
		gauge: option23,
		Val_max: 1000,
		Val_min: 0,
		margin:5,
		series:[{
			text:{
				enable:true
			},
			data: value,
			color: "#555555",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})

	var value1 = [{
		value : 500
	}];

	//var value = {value:50};
	var option2 = {
		max : 1000,
		min : 0,
		color : "#808080",
		tick : {
			tickInterval : 100
		},
		type : {
			type : "twoColorNeedle"
		},
		rangeContainer : {
			ranges : [{
				"startValue" : 100,
				"endValue" : 200,
				"color" : "#A7CC61"
			}, {
				"startValue" : 400,
				"endValue" : 600,
				"color" : "#ED4853"
			}]
		},
		bgcolor : "#222",
		startAngle : 180,
		endAngle : 270,
		counterclockwise : false
	};
	var option3 = {
		max : 1000,
		min : 0,
		color : "#808080",
		tick : {
			tickInterval : 100
		},
		type : {
			type : "rectangleNeedle"
		},
		rangeContainer : {
			ranges : [{
				"startValue" : 100,
				"endValue" : 200,
				"color" : "#A7CC61"
			}, {
				"startValue" : 400,
				"endValue" : 600,
				"color" : "#ED4853"
			}]
		},
		bgcolor : "#222",
		startAngle : 90,
		endAngle : 180,
		counterclockwise : false
	};
	var option4 = {
		max : 1000,
		min : 0,
		color : "#808080",
		tick : {
			tickInterval : 100
		},
		type : {
			type : "triangleNeedle"
		},
		rangeContainer : {
			ranges : [{
				"startValue" : 100,
				"endValue" : 200,
				"color" : "#A7CC61"
			}, {
				"startValue" : 400,
				"endValue" : 600,
				"color" : "#ED4853"
			}]
		},
		bgcolor : "#222",
		startAngle : 0,
		endAngle : 90,
		counterclockwise : false
	};


	var canvas24 = document.getElementById("canvas24");
    var context24= canvas24.getContext("2d");
    var A = new hichart('Gauge',context24,{x:0,y:0,width:300,height:300},{
		gauge: option2,
		Val_max: 1000,
		Val_min: 0,
		margin:5,
		series:[{
			text:{
				enable:true
			},
			data: value1,
			color: "#555555",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})

	var canvas25 = document.getElementById("canvas25");
    var context25= canvas25.getContext("2d");
    var A = new hichart('Gauge',context25,{x:0,y:0,width:300,height:300},{
		gauge: option3,
		Val_max: 1000,
		Val_min: 0,
		margin:5,
		series:[{
			text:{
				enable:true
			},
			data: value1,
			color: "#555555",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})

	var canvas26 = document.getElementById("canvas26");
    var context26= canvas26.getContext("2d");
    var A = new hichart('Gauge',context26,{x:0,y:0,width:300,height:300},{
		gauge: option4,
		Val_max: 1000,
		Val_min: 0,
		margin:5,
		series:[{
			text:{
				enable:true
			},
			data: value1,
			color: "#555555",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})



}