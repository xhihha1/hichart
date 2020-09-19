hichart.prototype.plotStackedAreaData = function (dataSet) {
    var context = this.context;
    var sections = this.options.sections;
    var xScale = this.xScale;
    var yScale = this.yScale;
    var series = this.options.series;

    var sectionSum = [];
	for (i=0;i<sections;i++) {
		sectionSum.push(0);
	}

    for (var s = 0; s < series.length; s++) {
        
        context.lineWidth = 1 / xScale;
        var grd;
        var maxVal = Math.max.apply(null, sectionSum); 
        var minVal = Math.max.apply(null, sectionSum); // 相加前最小(區域下界最小)

        context.beginPath();
        context.moveTo(0, sectionSum[0] + series[s]['data'][0]);
        // 繪製上界
        for (var i = 1; i < sections; i++) {
            context.lineTo(i, sectionSum[i] + series[s]['data'][i]);
        }
        // 繪製下界
        for (var i = sections - 1; i >= 0; i--) {
            context.lineTo(i, sectionSum[i]);
        }
        context.lineTo(0, sectionSum[0] + series[s]['data'][0]);
        // 取得新下界
        for (var i = 1; i < sections; i++) {
            if(!isNaN(series[s]['data'][i])){
                sectionSum[i] += series[s]['data'][i];
            }
        }
        // 相加後最大(區域上界最大)
        maxVal = Math.max.apply(null, sectionSum); 

        if (series[s]['linearGradient']) {
            grd = context.createLinearGradient(0, Math.min(0, minVal), 0, (Math.max(0,maxVal) + Math.min(0, minVal)) / 2); // 用上下界計算漸層
            for (g = 0; g < series[s]['linearGradient'].length; g++) {
                grd.addColorStop(series[s]['linearGradient'][g]['position'], series[s]['linearGradient'][g]['color']);
            }
        } else if (series[s]['color']) {
                grd = series[s]['color']
        } else {
                grd = this.options.colorList[s];
        }
        context.strokeStyle = grd;
        context.fillStyle = grd;

        context.fill();
        // context.stroke();
    }
}