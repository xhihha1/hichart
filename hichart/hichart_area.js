hichart.prototype.plotAreaData = function (dataSet) {
    var context = this.context;
    var sections = this.options.sections;
    var xScale = this.xScale;
    var yScale = this.yScale;
    var series = this.options.series;

    

    for (var s = 0; s < series.length; s++) {
        context.beginPath();
        context.moveTo(0, series[s]['data'][0]);
        context.lineWidth = 1 / xScale;
        var grd;
        var maxVal = Math.max.apply(null, series[s]['data']); 
        var minVal = Math.max.apply(null, series[s]['data']); 
        if (series[s]['linearGradient']) {
                grd = context.createLinearGradient(0, Math.min(0, minVal), 0, maxVal / 2);
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
        for (var i = 1; i < sections; i++) {
            
            
            context.lineTo(i, series[s]['data'][i]);
        }

        context.lineTo((sections - 1), 0);
        context.lineTo(0, 0);
        context.lineTo(0, series[s]['data'][0]);
        context.fill();
        // context.stroke();
    }
}