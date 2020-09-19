hichart.prototype.plotLineData = function (dataSet) {
    var context = this.context;
    var sections = this.options.sections;
    var xScale = this.xScale;
    var yScale = this.yScale;
    var series = this.options.series;

    // single dataSet
    /*context.beginPath();
    context.moveTo(0, dataSet[0]);
    context.lineWidth = 1/xScale;
    for (var i=1;i<sections;i++) {
    	//context.lineTo(i * xScale, dataSet[i]);
    	context.lineTo(i, dataSet[i]);
    }
    context.stroke();*/

    // context.lineTo((sections - 1) * xScale, 0);
    // context.lineTo(0, 0);
    // context.lineTo(0, dataSet[0]);
    // var grd = context.createLinearGradient(0, 0, 0, 110);
    // grd.addColorStop(0, "black");
    // grd.addColorStop(1, "white");
    // context.fillStyle = grd;
    // context.fill();
    for (var s = 0; s < series.length; s++) {
        context.beginPath();
        context.moveTo(0, series[s]['data'][0]);
        context.lineWidth = 1 / xScale;
        for (var i = 1; i < sections; i++) {
            var grd;
            if (series[s]['linearGradient']) {
                grd = context.createLinearGradient(0, 0, 0, series[s]['data'][i] / 2);
                for (g = 0; g < series[s]['linearGradient'].length; g++) {
                    grd.addColorStop(series[s]['linearGradient'][g]['position'], series[s]['linearGradient'][g]['color']);
                }
                //grd.addColorStop(0, "#000000");
                //grd.addColorStop(1, "#2dc4f6");
            } else if (series[s]['color']) {
                grd = series[s]['color']
            } else {
                grd = this.options.colorList[s];
            }
            context.strokeStyle = grd;
            context.lineTo(i, series[s]['data'][i]);
        }
        context.stroke();
    }
}