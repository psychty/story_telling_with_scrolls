
//  This work is inspired by Jim Vallandingham's amazing work on scrolling. I spent a day or so reading his tutorials on scrollytelling and the fundamentals of the approach.

// I decided to experiment with my own functions and methods to achieve changes over the course of the page.

// Whilst I have not used all the code from Jim, the approach is very inspired from it.

// When scroll position reaches x do y etc.
// https://vallandingham.me/scroller.html

var svg_width = document.getElementById("graphic").offsetWidth - document.getElementById("sections").offsetWidth - 80;

var svg_story = d3.select("#vis")
.append("svg")
.attr("height", 400)
.attr('width', svg_width)
.append("g");

svg_story
.append("text")
.attr("text-anchor", "middle")
.attr('id', 'testing1')
.attr("y", 200)
.attr("x", svg_width * .5)
.attr('opacity', 0)
.transition()
.duration(1000)
.attr('opacity', 1)
.style('font-weight', 'bold')
.text('I am sitting up here...');

var chosen_position = $('#scroll-to').offset().top,
   // window_height = $(window).height(),
    current_scroll_position = $(this).scrollTop();

window.onscroll = function() {myFunction()};

function myFunction() {
 current_scroll_position = $(this).scrollTop();
 console.log(current_scroll_position);

if (current_scroll_position > 300) {

svg_story
.selectAll("text")
.transition()
.duration(1000)
.attr('opacity', 0)

}

else {
  svg_story
  .selectAll("text")
  .transition()
  .duration(1000)
  .attr('opacity', 1)

};

}
