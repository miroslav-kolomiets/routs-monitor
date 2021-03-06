import * as d3 from 'd3';

function drawGanttChart (data) {
  var w = 1400;
  var h = 1000;

  var svg = d3
    .selectAll ('#chart')
    .append ('svg')
    .attr ('width', w)
    .attr ('height', h)
    .attr ('class', 'svg');

  var dateFormat = d3.timeParse ('%Y-%m-%d');

  var timeScale = d3
    .scaleTime ()
    .domain ([
      d3.min (data, function (d) {
        return dateFormat (d.startTime);
      }),
      d3.max (data, function (d) {
        return dateFormat (d.endTime);
      }),
    ])
    .range ([0, w - 150]);

  var categories = [];

  for (var i = 0; i < data.length; i++) {
    categories.push (data[i].type);
  }

  var catsUnfiltered = categories; //for vert labels

  categories = checkUnique (categories);

  makeGant (data, w, h);

  function makeGant (tasks, pageWidth, pageHeight) {
    var barHeight = 60;
    var gap = barHeight + 4;
    var topPadding = 75;
    var sidePadding = 75;

    var colorScale = d3
      .scaleLinear ()
      .domain ([0, categories.length])
      .range (['#00B9FA', '#F95002'])
      .interpolate (d3.interpolateHcl);

    makeGrid (sidePadding, topPadding, pageWidth, pageHeight);
    drawRects (
      tasks,
      gap,
      topPadding,
      sidePadding,
      barHeight,
      colorScale,
      pageWidth,
      pageHeight
    );
    vertLabels (gap, topPadding, sidePadding, barHeight, colorScale);
  }

  function drawRects (
    theArray,
    theGap,
    theTopPad,
    theSidePad,
    theBarHeight,
    theColorScale,
    w,
    h
  ) {
    var bigRects = svg
      .append ('g')
      .selectAll ('rect')
      .data (theArray)
      .enter ()
      .append ('rect')
      .attr ('x', 0)
      .attr ('y', function (d, i) {
        return i * theGap + theTopPad - 2;
      })
      .attr ('width', function (d) {
        return w - theSidePad / 2;
      })
      .attr ('height', theGap)
      // .attr ('stroke', 'black')
      // .attr ('stroke-dasharray', '5,5')
      .attr ('fill', function (d) {
        for (var i = 0; i < categories.length; i++) {
          if (d.type === categories[i]) {
            // return d3.rgb (theColorScale (i));
            // Background color
            return '#fff';
          }
        }
      })
      .attr ('class', 'main-block')
      .attr ('opacity', 0.2);

    var bigLines = svg
      .append ('g')
      .selectAll ('rect')
      .data (theArray)
      .enter ()
      .append ('line')
      .style ('stroke', '#777')
      .style ('stroke-dasharray', '5')
      .attr ('x1', 65)
      .attr ('y1', function (d, i) {
        return i * theGap + theTopPad - 2;
      })
      .attr ('x2', w - 70)
      .attr ('y2', function (d, i) {
        return i * theGap + theTopPad - 2;
      })
      .attr ('width', function (d) {
        return w - theSidePad / 2;
      })
      .attr ('fill', '#red')
      .attr ('opacity', 0.5);

    var rectangles = svg
      .append ('g')
      .selectAll ('rect')
      .data (theArray)
      .enter ();

    var innerRects = rectangles
      .append ('rect')
      .attr ('rx', 3)
      .attr ('ry', 3)
      .attr ('x', function (d) {
        return timeScale (dateFormat (d.startTime)) + theSidePad;
      })
      .attr ('y', function (d, i) {
        return i * theGap + theTopPad;
      })
      .attr ('width', function (d) {
        return (
          timeScale (dateFormat (d.endTime)) -
          timeScale (dateFormat (d.startTime))
        );
      })
      .attr ('height', theBarHeight)
      .attr ('stroke', 'none')
      .attr ('fill', function (d) {
        for (var i = 0; i < categories.length; i++) {
          if (d.type === categories[i]) {
            // return d3.rgb (theColorScale (i));
            // Events colors
            return '#7791ad';
          }
        }
      });

    var rectText = rectangles
      .append ('text')
      .text (function (d) {
        return d.task;
      })
      .attr ('x', function (d) {
        return (
          (timeScale (dateFormat (d.endTime)) -
            timeScale (dateFormat (d.startTime))) /
            2 +
          timeScale (dateFormat (d.startTime)) +
          theSidePad
        );
      })
      .attr ('y', function (d, i) {
        return i * theGap + 24 + theTopPad;
      })
      .attr ('font-size', 16)
      .attr ('text-anchor', 'middle')
      .attr ('text-height', theBarHeight)
      .attr ('fill', '#fff');

    var rectTextLoad = rectangles
      .append ('text')
      .text (function (d) {
        return d.load;
      })
      .attr ('x', function (d) {
        return (
          (timeScale (dateFormat (d.endTime)) -
            timeScale (dateFormat (d.startTime))) /
            2 +
          timeScale (dateFormat (d.startTime)) +
          theSidePad
        );
      })
      .attr ('y', function (d, i) {
        return i * theGap + 44 + theTopPad;
      })
      .attr ('font-size', 16)
      .attr ('text-anchor', 'middle')
      .attr ('text-height', theBarHeight)
      .attr ('fill', '#fff');

    innerRects
      .on ('click', function (e) {
        //console.log(this);
        var tag = '';

        tag = `<p class="tag-details">${d3.select (this).data ()[0].details}</p>
          <p class="tag-date">
          <span class="tag-date__label">Date:</span> ${d3
                                                       .select (this)
                                                       .data ()[0].startTime}</p>
          <p class="tag-time">
          <span class="tag-time__label">Time:</span> ${d3
                                                       .select (this)
                                                       .data ()[0].startTime}</p>
          <div class="tag__controls">
            <div class="tag__controls-row">
              <button class="btn btn-secondary">Experiment</button>
              <button class="btn btn-secondary">Kibana</button>
            </div>
            <div class="tag__controls-row">
              <button class="btn btn-secondary">Funnel</button>
              <button class="btn btn-secondary">Update</button>
            </div>
          </div>`;

        var output = document.getElementById ('tag');

        var x =
          this.x.animVal.value + this.width.animVal.value / 2 - 120 + 'px';
        var y = this.y.animVal.value + 65 + 'px';

        output.innerHTML = tag;
        output.style.top = y;
        output.style.left = x;
        output.style.display = 'block';

        document.addEventListener ('click', evt => {
          const tag = document.getElementById ('tag');
          let targetElement = evt.target;

          do {
            if (targetElement == tag) {
              return;
            }

            targetElement = targetElement.parentNode;
          } while (targetElement);

          if (tag.style.display === 'block') {
            console.log ('block');
          }
          // document.getElementById ('tag').style.display = 'flex';
        });
      })
      .on ('mouseout', function () {
        var output = document.getElementById ('tag');
        // output.style.display = 'none';
      });
  }

  function makeGrid (theSidePad, theTopPad, w, h) {
    var xAxis = d3
      .axisBottom (timeScale)
      .ticks (d3.timeDay, 1)
      .tickSize (-h + theTopPad + 20, 0, 0)
      .tickFormat (d3.timeFormat ('%B %e, %Y %I %p'));

    // x-axis line
    svg
      .append ('line') // attach a line
      .style ('stroke', '#2c435c') // colour the line
      .attr ('x1', 75) // x position of the first end of the line
      .attr ('y1', 750) // y position of the first end of the line
      .attr ('x2', w - 40) // x position of the second end of the line
      .attr ('y2', 750);

    svg
      .append ('svg')
      .attr ('width', 20)
      .attr ('height', 20)
      .attr ('x', w - 60)
      .attr ('y', 745)
      .append ('polyline')
      .attr ('points', '10 5, 0 0, 0 10')
      .style ('fill', '#2c435c');

    // y-axis line
    svg
      .append ('line') // attach a line
      .style ('stroke', '#2c435c') // colour the line
      .attr ('x1', 75) // x position of the first end of the line
      .attr ('y1', 40) // y position of the first end of the line
      .attr ('x2', 75) // x position of the second end of the line
      .attr ('y2', h - 250);

    svg
      .append ('svg')
      .attr ('width', 20)
      .attr ('height', 20)
      .attr ('x', 70)
      .attr ('y', 30)
      .append ('polyline')
      .attr ('points', '10 10, 5 0, 0 10')
      .style ('fill', '#2c435c');

    // y-axis text
    svg
      .append ('text')
      .attr ('x', 45)
      .attr ('y', 20)
      .text ('Routes')
      .attr ('font-family', 'sans-serif')
      .attr ('font-size', '18px')
      .attr ('font-weight', 'bold')
      .attr ('fill', '#414141');

    // x-axis text
    svg
      .append ('text')
      .attr ('x', w - 200)
      .attr ('y', h - 220)
      .text ('Events Timeline')
      .attr ('font-family', 'sans-serif')
      .attr ('font-size', '18px')
      .attr ('font-weight', 'bold')
      .attr ('fill', '#414141');

    var grid = svg
      .append ('g')
      .attr ('class', 'grid')
      .attr ('stroke', 'black')
      .attr ('stroke-dasharray', '5,5')
      .attr ('transform', 'translate(' + theSidePad + ', ' + (h - 50) + ')')
      .call (xAxis)
      .selectAll ('text')
      .style ('text-anchor', 'middle')
      .attr ('fill', '#000')
      .attr ('transform', 'matrix(-0.00 ,-1.00, 1.00, -0.00, 5, -75)')
      .attr ('stroke', 'none')
      .attr ('font-size', 14)
      .attr ('dy', '1em');
  }

  function vertLabels (
    theGap,
    theTopPad,
    theSidePad,
    theBarHeight,
    theColorScale
  ) {
    var numOccurances = [];
    var prevGap = 0;

    for (var i = 0; i < categories.length; i++) {
      numOccurances[i] = [
        categories[i],
        getCount (categories[i], catsUnfiltered),
      ];
    }

    var axisText = svg
      .append ('g') //without doing this, impossible to put grid lines behind text
      .selectAll ('text')
      .data (numOccurances)
      .enter ()
      .append ('text')
      .text (function (d) {
        return d[0];
      })
      .attr ('x', 10)
      .attr ('y', function (d, i) {
        if (i > 0) {
          for (var j = 0; j < i; j++) {
            prevGap += numOccurances[i - 1][1];
            // console.log(prevGap);
            return d[1] * theGap / 2 + prevGap * theGap + theTopPad;
          }
        } else {
          return d[1] * theGap / 2 + theTopPad;
        }
      })
      .attr ('font-size', 14)
      .attr ('text-anchor', 'start')
      .attr ('text-height', 14)
      .attr ('fill', function (d) {
        for (var i = 0; i < categories.length; i++) {
          if (d[0] === categories[i]) {
            //  console.log("true!");
            // return d3.rgb (theColorScale (i)).darker ();
            // Font color
            return '#414141';
          }
        }
      });
  }

  //from this stackexchange question: http://stackoverflow.com/questions/1890203/unique-for-arrays-in-javascript
  function checkUnique (arr) {
    var hash = {}, result = [];
    for (var i = 0, l = arr.length; i < l; ++i) {
      if (!hash.hasOwnProperty (arr[i])) {
        //it works with objects! in FF, at least
        hash[arr[i]] = true;
        result.push (arr[i]);
      }
    }
    return result;
  }

  //from this stackexchange question: http://stackoverflow.com/questions/14227981/count-how-many-strings-in-an-array-have-duplicates-in-the-same-array
  function getCounts (arr) {
    var i = arr.length, // var to loop over
      obj = {}; // obj to store results
    while (i)
      obj[arr[--i]] = (obj[arr[i]] || 0) + 1; // count occurrences
    return obj;
  }

  // get specific from everything
  function getCount (word, arr) {
    return getCounts (arr)[word] || 0;
  }
}

export {drawGanttChart};
