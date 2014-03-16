function labelCountChartData() {
    this.labels = [];
    this.counts = [];
    this.colors = [];
}

function labelCountChart(label_count_data) {
    this.labels = label_count_data.labels;
    this.counts = label_count_data.counts;
    this.colors = label_count_data.colors;
    
    this.buildChart = function() {
        var that = this;
            $('#LabelCount-Container').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Card count per label'
                },
                subtitle: {
                    text: 'cards can have multiple labels'
                },
                xAxis: {
                    categories: that.labels,
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cards',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' Cards'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        } 
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    data: that.counts
                }]
            });
          };
 }
