;(function () {
    const margin = { top: 20, right: 50, bottom: 50, left: 50 }

    const width = 600 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    let dots; // create a variable in the outermost scope where we can store the lines we draw
    let label;

    const svg = d3
        .select("#chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")


    const xPositionScale = d3.scaleLinear().domain([0, 8000]).range([0, width]);
    const yPositionScale = d3.scaleLinear().domain([0, 10]).range([height, 0]);

    var url = "https://s3.amazonaws.com/interactives.dallasnews.com/jobtests/graphicsreporter/testdata.json";
    
    d3.json(url) 
    .then(ready) 
    .catch(function (error) {
      console.log("Failed with", error);
    });

    var schools = []
    function ready(datapoints) { // datapoints is a variable name
    console.log("Data is", datapoints['data']);

    var schoolDist = datapoints['data']
    for (var i=0; i<schoolDist.length; i++) {
      for (var j= 0; j<schoolDist[i]['data'].length; j++) {
        var school = schoolDist[i]['data'][j]
        schools.push(school)
    }
   }
  


    const yAxis = d3.axisLeft(yPositionScale);
    svg.append("g").attr("class", "axis y-axis").call(yAxis);

    const xAxis = d3.axisBottom(xPositionScale);
    svg
    .append("g")
    .attr("class", "axis x-axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

    svg.append("text")
    .attr("class", "x-label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 6)
    .text("Enrollment");

    svg.append("text")
    .attr("class", "y-label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("UIL Championship Counts");

    label = svg.append('text') // assigning my label to the variable up top
    .text("Aledo High School")
    .attr('x', xPositionScale(2500))
    .attr('y', yPositionScale(10))
    .attr('class', 'label hidden');

   }


    // do stuff to the chart here
    // depending on what step you are at
    const updateChart = (step_index, direction)=>{

        console.log('we are at step', step_index);

        if(step_index === 0){
            if(direction==='forward'){
                svg
                .selectAll("circle")
                .data(schools)
                .enter()
                .append("circle")
                .attr('id', (d,i)=> 'circle-'+ i)
                .attr("cx", (d) => xPositionScale(d['enrollment']))
                .attr("cy", (d) => yPositionScale(d['championships count']))
                .attr("fill", "#4F5D75")
                .attr("opacity", 0.5)
                .attr("r", 0)
                .transition()
                .duration(2000)
                .ease(d3.easeElastic)
                .attr("r", 8);
            } else{
                d3.select('#circle-0').raise().style('fill', '#4F5D75').style('opacity', 0.5).style('r', 8);
            }
            
        }

        if(step_index === 1){
            if(direction==='forward'){
                d3.select('#circle-0').raise().style('fill', '#EF8354').style('opacity', 1).style('r', 10);
            } else{
                d3.select('#circle-0').raise().style('fill', '#4F5D75').style('opacity', 0.5).style('r', 8);
                label.classed('hidden', true);
            }
        }

        if(step_index === 2){
            if(direction==='forward'){
                label.classed('hidden', false);
            } else{
                
            }
        }

    };

    //select the steps
    let steps = d3.selectAll('.step');

    enterView({
        selector: steps.nodes(), 
        offset: 0.2, 
        enter: el => { // when it enters, do this
            const index = +d3.select(el).attr('data-index'); 
            updateChart(index, 'forward'); 
        },
        exit: el => { 
            let index = +d3.select(el).attr('data-index'); 
            index = Math.max(0, index - 1); 
            updateChart(index, 'back'); 
        }
    });
})()
