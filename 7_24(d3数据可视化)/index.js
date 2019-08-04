var data = [90, 86, 168, 281, 303, 800];

var scale = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, 300])

d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .transition() 
    .style("width", function(d) { return scale(d) + 'px' })
    .text(function(d) { return '$ ' + d; });

d3.select("body").transition()
    .delay(750)
    .each("start", function() { d3.select(this).style("color", "green"); })
    .style("color", "red");