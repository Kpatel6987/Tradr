$(function() {
    var ticker = $('#a').attr('id')+","+ $('#b').attr('id');

  var Aladdin = new blk.API();
  Aladdin.performanceData({
    identifiers: ticker
  }, function(data) {
    $('#container').highcharts('StockChart', {
      rangeSelector: {
        selected: 5
      },
      title: {
        text: data.resultMap.RETURNS.map(function(returns) {
          return returns.ticker
        }).join('/') + ' Stock Return ($100 Investment)'
      },
      series: data.resultMap.RETURNS.map(function(returns) {
        return {
          name: returns.ticker,
          data: returns.performanceChart.map(function(point) {
            return [point[0], point[1] * 100]
          }),
          tooltip: {
            valueDecimals: 2
          }
        }
      })
    });
  });
});
$(document).ready(function() {
    $("#clicker").click(function() {
    var ticker = $("#acc").val();
  var Aladdin = new blk.API();
  Aladdin.performanceData({
    identifiers: ticker
  }, function(data) {
    $('#container').highcharts('StockChart', {
      rangeSelector: {
        selected: 5
      },
      title: {
        text: data.resultMap.RETURNS.map(function(returns) {
          return returns.ticker
        }).join('/') + ' Stock Return ($100 Investment)'
      },
      series: data.resultMap.RETURNS.map(function(returns) {
        return {
          name: returns.ticker,
          data: returns.performanceChart.map(function(point) {
            return [point[0], point[1] * 100]
          }),
          tooltip: {
            valueDecimals: 2
          }
        }
      })
    });
  });
});
});
