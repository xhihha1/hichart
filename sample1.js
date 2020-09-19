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
		Val_max:130,
		Val_min:-40,
		stepSize:10,
		xAxis:{
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
    var C = new hichart('Pie',context3,{x:0,y:0,width:300,height:300},{
		sections:1,
		Val_max: 1,
		Val_min: 0,
		columnSize:0,
		rowSize:0,
		margin:0,
		xAxis:{
			showGrid: false,
			gridLineWidth: 0
		},
		yAxis:{
			showGrid: false,
			gridLineWidth: 0
		}
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

	var canvas7 = document.getElementById("canvas7");
    var context7= canvas7.getContext("2d");
    var A = new hichart('BasicPie',context7,{x:0,y:0,width:300,height:300},{
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
			text:{
				enable:true
			},
			data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销', linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]},
                {value: 234, name: '联盟广告'},
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
			data:[10,20,30,40,50,60,15,25,35,45,55,65],
			color: "#d9406f",
			linearGradient:[{position:0,color:"#000000"},{position:1,color:"#d9406f"}]
		},{
			data:[10,20,30,40,50,60,15,25,35,45,55,65],
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
    
    var canvas12 = document.getElementById("canvas12");
    var context12 = canvas12.getContext("2d");
	/*context2.fillStyle = '#00FF00';
    context2.fillRect(0,0, canvas2.width,canvas2.height);*/
    var B = new hichart('Radar',context12,canvas12, {
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

}