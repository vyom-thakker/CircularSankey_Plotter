<!DOCTYPE html>

<html>

    <head>

      <script src="https://d3js.org/d3.v4.min.js"></script>
      <script src="d3-sankey-circular.js"></script>
      <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>
      <script src="Sankey_1.js"></script>

      <link href="https://fonts.googleapis.com/css?family=Roboto:100i" rel="stylesheet">

      <title>Sankey with circular links</title>
      <style>
        body {
                  font-family: 'Roboto', sans-serif;
                }

    rect {
              shape-rendering: crispEdges;
            }

    text {
              font-size: 26px;
              font-weight:600;
              font-family: calibri, sans-serif;
            }

    .link {
              fill: none;
            }
  </style>
    </head>

    <body>

      <h1>Sankey with circular links</h1>

      <div id="chart"></div>

      <script>
        var margin = { top: 100, right: 100, bottom: 130, left: 100 };
    var width = 900;
    var height = 300;

    let data = dataV;

    const nodePadding = 75;

    const circularLinkGap = 2;

    var sankey = d3.sankey()
      .nodeWidth(30)
      .nodePadding(nodePadding)
      .nodePaddingRatio(1.08)
      .scale(0.5)
      .size([width, height])
      .nodeId(function (d) {
                  return d.name;
                })
      .nodeAlign(d3.sankeyRight)
      .iterations(0);

    var svg = d3.select("#chart").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    var linkG = g.append("g")
      .attr("class", "links")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.2)
      .selectAll("path");

    var nodeG = g.append("g")
      .attr("class", "nodes")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .selectAll("g");

    let sankeyData = sankey(data);
    let sankeyNodes = sankeyData.nodes;
    let sankeyLinks = sankeyData.links;

    let depthExtent = d3.extent(sankeyNodes, function (d) { return d.depth; });

    var nodeColour = d3.scaleSequential(d3.interpolateCool)
    .domain([0,width]);

    var node = nodeG.data(sankeyNodes)
      .enter()
      .append("g");

    node.append("rect")
      .attr("x", function (d) { return d.x0; })
      .attr("y", function (d) { return d.y0; })
      .attr("height", function (d) { return d.y1 - d.y0; })
      .attr("width", function (d) { return d.x1 - d.x0; })
      .style("fill", function (d) { return nodeColour(d.x0); })
      .style("opacity", 0.5)
      .on("mouseover", function (d) {

                  let thisName = d.name;

                  node.selectAll("rect")
                    .style("opacity", function (d) {
                                    return highlightNodes(d, thisName)
                                  })

                  d3.selectAll(".sankey-link")
                    .style("opacity", function (l) {
                                    return l.source.name == thisName || l.target.name == thisName ? 1 : 0.3;
                                  })

                  node.selectAll("text")
                    .style("opacity", function (d) {
                                    return highlightNodes(d, thisName)
                                  })
                })
      .on("mouseout", function (d) {
                  d3.selectAll("rect").style("opacity", 0.9);
                  d3.selectAll(".sankey-link").style("opacity", 0.9);
                  d3.selectAll("text").style("opacity", 1);
                })

    node.append("text")
      .attr("x", function (d) { return (d.x0 + d.x1) / 2; })
      .attr("y", function (d) { return d.y0 - 12; })
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(function (d) { return d.name; });

    node.append("title")
      .text(function (d) { return d.name + "\n" + (d.value); });

    var link = linkG.data(sankeyLinks)
      .enter()
      .append("g")

    link.append("path")
      .attr("class", "sankey-link")
      .attr("d", sankeyPath)
      .style("stroke-width", function (d) { return Math.max(1, d.width); })
      .style("opacity", 0.7)
      .style("stroke", function (link, i) {
                  return link.circular ? "red" : "black"
                })

    link.append("title")
      .text(function (d) {
                  return d.source.name + " ??? " + d.target.name + "\n Index: " + (d.index);
                });

    var arrowsG = linkG.data(sankeyLinks)
      .enter()
      .append("g")
      .attr("class", "g-arrow")
      .call(appendArrows, 20, 300, 4)

    function highlightNodes(node, name) {

              let opacity = 0.3

              if (node.name == name) {
                          opacity = 1;
                        }
              node.sourceLinks.forEach(function (link) {
                          if (link.target.name == name) {
                                        opacity = 1;
                                      };
                        })
              node.targetLinks.forEach(function (link) {
                          if (link.source.name == name) {
                                        opacity = 1;
                                      };
                        })

              return opacity;

            }

    const container = d3.select('svg').classed('container',true);

  </script>
    </body>

</html>


