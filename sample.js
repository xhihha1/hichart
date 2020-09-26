function sample(){
    var canvas4 = document.getElementById("canvas4");
    var context4 = canvas4.getContext("2d");
	var A = new hichart('Bar',context4,{x:0,y:0,width:150,height:150,},{
		series:[{
			data:[14, 7, 4.2, 4, 3.5, 14, 7, 4.2, 4, 3.5, 8, 5.5]
		}]
	})
	var B = new hichart('Line',context4,{x:150,y:0,width:150,height:150}, {
		sections:12,
		Val_max:130,
		Val_min:-40,
		stepSize:10,
		xAxis:{
			categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		}
	})
	var C = new hichart('Pie',context4,{x:0,y:150,width:150,height:150},{
		sections:1,
		Val_max: 1,
		Val_min: 0,
		columnSize:0,
		rowSize:0,
		margin:5,
		xAxis:{
			showGrid: false,
			gridLineWidth: 0
		},
		yAxis:{
			showGrid: false,
			gridLineWidth: 0
		},
		series:[{
			text:{
				enable:true
			},
			data: [ 
                {value: 14, name: '直接访问'},
                {value: 7, name: '邮件营销', linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]},
                {value: 20.2, name: '联盟广告'},
                {value: 4, name: '视频广告'},
                {value: 3.5, name: '搜索引擎'}
            ],
			color: "#555555",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})
	var D = new hichart('StackedBar',context4,{x:150,y:150,width:150,height:150},{
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

	var data = [];
	for (var i = 0; i <= 100; i++) {
		var theta = i / 100 * 360;
		var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
		data.push([r, theta]);
	}
    var E = new hichart('Polar',context4,{x:300,y:0,width:150,height:150},{
		sections:1,
		Val_max: 10,
		Val_min: 0,
		stepSize:2,
		columnSize:0,
		rowSize:0,
		margin:5,
		xAxis:{
			showGrid: false,
			gridLineWidth: 0
		},
		yAxis:{
			showGrid: false,
			gridLineWidth: 0
		},
		series:[{
			data: data,
			color: "#d9406f",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})

	var A = new hichart('BasicPie',context4,{x:300,y:150,width:150,height:150},{
		sections:1,
		Val_max: 10,
		Val_min: 0,
		stepSize:2,
		columnSize:0,
		rowSize:0,
		margin:5,
		xAxis:{
			showGrid: false,
			gridLineWidth: 0
		},
		yAxis:{
			showGrid: false,
			gridLineWidth: 0
		},
		series:[{
			data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 548, name: '搜索引擎'}
            ],
			color: "#d9406f",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
	})

	var B = new hichart('Area',context4,{x:450,y:0,width:150,height:150}, {
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

    var B = new hichart('Area',context4,{x:450,y:150,width:150,height:150}, {
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

	var B = new hichart('StackedArea',context4,{x:600,y:0,width:150,height:150}, {
		sections:12,
		Val_max:130,
		Val_min:0,
		stepSize:10,
		xAxis:{
			categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		series:[{
			data:[10,20,30,40,50,60,15,25,35,45,55,65],
			color: "#d9406f",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		},{
			data:[10,20,30,40,50,60,15,25,35,45,55,65],
			color: "#4e94ab",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#edc214"}]
		}]
    })
    
    var data = [];
	for (var i = 0; i <= 360; i++) {
		var t = i / 180 * Math.PI;
		var r = Math.sin(2 * t) * Math.cos(2 * t);
		data.push([r, i]);
	}

    var A = new hichart('Polar',context4,{x:600,y:150,width:150,height:150},{
		sections:1,
		Val_max: 0.5,
		Val_min: 0,
		stepSize: 0.1,
		columnSize:0,
		rowSize:0,
		margin:5,
		xAxis:{
			showGrid: false,
			gridLineWidth: 0
		},
		yAxis:{
			showGrid: false,
			gridLineWidth: 0
		},
		series:[{
			data: data,
			color: "#d9406f",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		}]
    })
    
    var B = new hichart('Radar',context4,{x:750,y:0,width:150,height:150}, {
		sections:12,
		Val_max:130,
		Val_min: 0,
		stepSize:10,
		xAxis:{
			showGrid: false,
			gridLineWidth: 0
		},
		yAxis:{
			showGrid: false,
			gridLineWidth: 0
		},
        radar: {
            // shape: 'circle',
            name: {
                enable: false,
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

	var B = new hichart('BZLine',context4,{x:750,y:150,width:150,height:150}, {
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

	var A = new hichart('PhaseSequence',context4,{x:0,y:300,width:150,height:150},{
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

	var B = new hichart('TimelineMulti',context4,{x:150,y:300,width:150,height:150}, {
		series:[
			{label:"tag1",data:testData},
			{label:"tag2",data:testData1}
		]
	});

	var B = new hichart('TimelineMulti',context4,{x:300,y:300,width:150,height:150}, {
		timeline:{
			type:{type:"multiTimeLine"},
			lineWidth:10
		},
		series:[
			{label:"tag1",data:testData},
			{label:"tag2",data:testData1}
		]
	});

    var B = new hichart('TimelineMulti',context4,{x:450,y:300,width:150,height:150}, {
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


    var B = new hichart('LinearGauge',context4,{x:600,y:300,width:150,height:150}, {
		Val_max: 100,
		Val_min: -100,
		linearGauge:{
			bar:{
                padding: 5
			},
			lineWidth:5,
			font: {
                size: 10
            },
			type: { type: "circle" }, 
			label: { 
				type: "textCloud",
				font:{
					size: 10,
				},
				padding: 5
			} 
		},
		series:[
			{label:"tag1",data:value1}
		]
	});


    var B = new hichart('LinearGauge',context4,{x:750,y:300,width:150,height:150}, {
		Val_max: 100,
		Val_min: -100,
		linearGauge:{
			bar:{
                padding: 5
			},
			lineWidth:5,
			font: {
                size: 10
            },
			label: { type: "marker"}
		},
		series:[
			{label:"tag1",data:value}
		]
	});


    var B = new hichart('LinearGauge',context4,{x:0,y:450,width:150,height:150}, {
		Val_max: 100,
		Val_min: -100,
		linearGauge:{
			bar:{
                padding: 5
			},
			lineWidth:5,
			font: {
                size: 10
            },
			type: { type: "rectangle" }, 
			label: { 
				type: "textCloud",
				font:{
					size: 10,
				},
				padding: 5
			}, 
			orientation: "vertical"
		},
		series:[
			{label:"tag1",data:value1}
		]
	});


    var B = new hichart('LinearGauge',context4,{x:150,y:450,width:150,height:150}, {
		Val_max: 100,
		Val_min: -100,
		linearGauge:{
			bar:{
                padding: 5
			},
			lineWidth:5,
			font: {
                size: 10
            },
			orientation: "vertical", 
			label: { type: "marker"}
		},
		series:[
			{label:"tag1",data:value}
		]
	});


	var A = new hichart('DoughnutPie',context4,{x:300,y:450,width:150,height:150},{
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


}