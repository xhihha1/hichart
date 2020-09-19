
function hichart(chartType, g, rect, options){
	this.context = g;
	this.chartType = chartType;
	this.rect = rect;
	this.options = {
		sections:12,
		Val_max:14,
		Val_min: 0,
		stepSize:1,
		columnSize:20,
		rowSize:40,
		margin:10,
		label:{
			fontSize: 10
		},
		stick:{
			size:3
		},
        xAxis:{
			showGrid: true,
			gridLineWidth: 1,
			categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
        yAxis:{
			showGrid: true,
			gridLineWidth: 1,
			data:[14, 7, 4.2, 4, 3.5]
		},
		series:[
			{
				data:[30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99, 130],
				color: "#d9406f",
				linearGradient:[{position:0,color:"#000000"},{position:1,color:"#2dc4f6"}]
			},
			{
				data:[20, -10, -20, -25, -40, 5, 10, 28, 30, 43, 65, 80],
				color: "#4e94ab"
			}
		],
        colorList:['#edc214', '#d9406f', '#4e94ab', '#5bd1d7','#348498','#004d61','#ff502f'] 
    }
	//this.options = Object.assign({}, this.options, options);
	
	this.options = this.mergeDeep(this.options, options);
	this.options = this.mergeSeriesData(this.options, options);
	
    this.context.font = "19 pt Arial;"
	if(!this.context){
		return false;
	}
	if(typeof this.rect.x == 'undefined'){
		this.rect.x = 0;
	}
	if(typeof this.rect.y == 'undefined'){
		this.rect.y = 0;
	}
	this.canvasHeight = rect.height;
	this.canvasWidth = rect.width;
	this.yScale = (this.canvasHeight - this.options.columnSize - this.options.margin) / (this.options.Val_max - this.options.Val_min);
	this.xScale = (this.canvasWidth - this.options.rowSize) / this.options.sections;
	//this.context.fillStyle="#00ff00";
    //this.context.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);

    this.context.fillStyle="#85969B";
	this.context.strokeStyle="#85969B";

	this.drawAxis();
	
	return this;
}
hichart.prototype.mergeSeriesData = function(target, source){
	if(source && source['series']){
		target['series'] = JSON.parse(JSON.stringify(source['series']));
	}
	return target;
	
}
hichart.prototype.mergeDeep = function(target, source) {
    if(typeof target !== 'object' || typeof source !== 'object') return target;
    for(var prop in source) {
    if(!source.hasOwnProperty(prop)) continue;
      if(prop in target) {
        if(typeof target[prop] !== 'object') {
          target[prop] = source[prop];
        } else {
          if(typeof source[prop] !== 'object') {
            target[prop] = source[prop];
          } else {
            if(target[prop].concat && source[prop].concat) {
              target[prop] = target[prop].concat(source[prop]);
            } else {
              target[prop] = this.mergeDeep(target[prop], source[prop]); 
            } 
          }  
        }
      } else {
        target[prop] = source[prop]; 
      }
    }
  return target;
}

hichart.prototype.drawAxis = function(){
	var chartType = this.chartType;
	var context = this.context;
    var xAxis = this.options.xAxis;
    var yAxis = this.options.yAxis;
	var sections = this.options.sections;
	var xScale = this.xScale;
	var yScale = this.yScale;
	var columnSize = this.options.columnSize;
	var margin = this.options.margin;
	var Val_max = this.options.Val_max;
	var Val_min = this.options.Val_min;
	var stepSize = this.options.stepSize;
	var rowSize = this.options.rowSize;
	context.strokeStyle="#85969B"; // color of grid lines
	
	var font = this.options.label.fontSize + "px Georgia";
    context.font = font;
	
	context.beginPath();
	var endVirticalX;
	context.lineWidth = xAxis['gridLineWidth'];
	for (i=0;i<sections;i++) {
		var x = rowSize + i * xScale + this.rect.x;
        var y = this.canvasHeight + margin - columnSize + this.rect.y;
		if(xAxis['showGrid']){
			context.fillText(xAxis['categories'][i], x, y);
			context.moveTo(x, margin + this.rect.y);
			context.lineTo(x, this.canvasHeight - columnSize + this.rect.y);
		}
		endVirticalX = x;
	}

    var count =  0;
	context.lineWidth = yAxis['gridLineWidth'];
	for (scale=Val_max;scale>=Val_min;scale = scale - stepSize) {
        var x = margin + this.rect.x;
		var y = (yScale * count * stepSize) + margin + this.rect.y; 
		if(yAxis['showGrid']){
			context.fillText(scale, x, y);
			context.moveTo(rowSize + this.rect.x,y)
			context.lineTo(endVirticalX,y)
		}
		count++;
	}
    context.stroke();
    
    var translateX = this.translateX = rowSize + this.rect.x;
	var translateY = this.translateY = this.canvasHeight + Val_min * yScale - columnSize +  + this.rect.y;
	var scaleX = this.scaleX = xScale;
	var scaleY = this.scaleY = -1 * yScale;
	// console.log(this.chartType, 'translateX',translateX, 'translateY',translateY, 'scaleX',scaleX, 'scaleY',scaleY)
	context.translate(translateX, translateY);
    context.scale(scaleX, scaleY);
	if(chartType == 'Bar'){
		var dataSet = [14, 7, 4.2, 4, 3.5, 14, 7, 4.2, 4, 3.5, 8, 5.5];
		//this.plotBarData(dataSet);
		this['plot'+chartType+'Data'](dataSet);
	} else if(chartType == 'StackedBar'){
		this['plot'+chartType+'Data']();
	} else if(chartType == 'Line'){
		var dataSet = [30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99, 130];
		context.strokeStyle="#d9406f"; 
		//this.plotLineData(dataSet);
		this['plot'+chartType+'Data'](dataSet);
		dataSet = [20, -10, -20, -25, -40, 5, 10, 28, 30, 43, 65, 80];
		context.strokeStyle="#4e94ab"; 
		//this.plotLineData(dataSet);
		this['plot'+chartType+'Data'](dataSet);
	} else if(chartType == 'Pie'){
		var dataSet = [14, 7, 4.2, 4, 3.5];
		//this.plotBarData(dataSet);
		this['plot'+chartType+'Data'](dataSet);
	} else if(chartType == 'Polar'){
		var dataSet = [14, 7, 4.2, 4, 3.5];
		//this.plotBarData(dataSet);
		this['plot'+chartType+'Data'](dataSet);
	} else {
		this['plot'+chartType+'Data']();
	}
    

	/*context.strokeStyle="#FF0000";
	context.beginPath();
	context.arc(0, 0, 1, 0, 2 * Math.PI);
	context.stroke();*/
	context.scale((1 / scaleX),(1 / scaleY));
	context.translate(-1 * translateX, -1 * translateY);
	//context.translate(-1 * 0, -1 * 0);
	//context.scale(Math.abs(1 / scaleX), Math.abs(1 / scaleY));
	
	context.lineWidth = 3;
	context.strokeStyle="#00FF00";
	context.beginPath();
	context.arc(0, 0, 20, 0, 2 * Math.PI);
	context.stroke();
	// console.log(this.chartType)
	
}
