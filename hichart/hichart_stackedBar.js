hichart.prototype.plotStackedBarData = function(dataSet){
	var context = this.context;
	var sections = this.options.sections;
	var xScale = this.xScale;
    var yScale = this.yScale;
    var margin = this.options.margin;
	var series = this.options.series;
	
	var sectionSum = [];
	for (i=0;i<sections;i++) {
		sectionSum.push(0);
	}
	
	for(var s = 0; s < series.length;s++){
		for (i=0;i<sections;i++) {
			var grd;
			if(series[s]['linearGradient']){
				grd = context.createLinearGradient(0, 0, 0, (sectionSum[i] + series[s]['data'][i]));
				for (g=0;g<series[s]['linearGradient'].length;g++) {
					grd.addColorStop(series[s]['linearGradient'][g]['position'], series[s]['linearGradient'][g]['color']);
				}
				//grd.addColorStop(0, "#000000");
				//grd.addColorStop(1, "#2dc4f6");
			} else if(series[s]['color']){
				grd = series[s]['color']
			} else {
				grd = this.options.colorList[s];
			}
			var tempRate = 0.5;
			var barWidth = tempRate;
			context.fillStyle = grd;
			context.fillRect(i, sectionSum[i], barWidth, series[s]['data'][i]);
			if(!isNaN(series[s]['data'][i])){
				sectionSum[i] += series[s]['data'][i];
			}
		}
	}
}
