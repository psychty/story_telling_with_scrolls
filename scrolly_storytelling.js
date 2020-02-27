
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

var vis_position = $('#vis')[0].getBoundingClientRect().top // Where is the data vis vertical position from the top of the viewport (not top of document, as some people may reload part way down)
console.log(vis_position)

var chosen_position_1 = $('#scroll-one').offset().top - vis_position;
var chosen_position_2 = $('#scroll-two').offset().top - vis_position;
var chosen_position_3 = $('#scroll-three').offset().top - vis_position;
var chosen_position_4 = $('#scroll-four').offset().top - vis_position;
var chosen_position_5 = $('#scroll-five').offset().top - vis_position;
var chosen_position_6 = $('#scroll-six').offset().top - vis_position;
var chosen_position_final = $('#scroll-final').offset().top - vis_position;

var section_index =  d3.scaleOrdinal()
  .domain([chosen_position_1, chosen_position_2, chosen_position_3, chosen_position_4, chosen_position_5, chosen_position_6])
  .range(['First section','second section','third','fourth', 'fifth','sixth']);

var current_scroll_position = $(this).scrollTop();
var active_section = null;

if (current_scroll_position < chosen_position_2) {
active_section = section_index(chosen_position_1);
} else if (current_scroll_position >= chosen_position_2 && current_scroll_position < chosen_position_3) {
active_section = section_index(chosen_position_2);
} else if (current_scroll_position >= chosen_position_3 && current_scroll_position < chosen_position_4) {
active_section = section_index(chosen_position_3);
} else if (current_scroll_position >= chosen_position_4 && current_scroll_position < chosen_position_5) {
active_section = section_index(chosen_position_4);
} else if (current_scroll_position >= chosen_position_5 && current_scroll_position < chosen_position_6) {
active_section = section_index(chosen_position_5);
} else if (current_scroll_position >= chosen_position_6 && current_scroll_position < chosen_position_final) {
active_section = section_index(chosen_position_6);
} else {
active_section = 'You have reached the end';
}

active_section.onchange = function(){fire_my_svg()};

function fire_my_svg() {
console.log('I have seen the light')
}


// We currently have an issue where as soon as the scroll changes the relevant function is fired, even if it means firing the same vis again and again within the section (if you scroll a little bit but within the same function).
// I think we need to store the last scroll position and then fire the function when it reaches the next level.

//  perhaps a scale which says if x between 1 - 200 = first, 201-400 = second. if scroll position is equal to the last one then do nothing, if it changes into a new section then fire function.

window.onscroll = function() {check_scroll_pos()};

function check_scroll_pos() {
current_scroll_position = $(this).scrollTop();

if (current_scroll_position < chosen_position_2) {
active_section = section_index(chosen_position_1);
} else if (current_scroll_position >= chosen_position_2 && current_scroll_position < chosen_position_3) {
active_section = section_index(chosen_position_2);
} else if (current_scroll_position >= chosen_position_3 && current_scroll_position < chosen_position_4) {
active_section = section_index(chosen_position_3);
} else if (current_scroll_position >= chosen_position_4 && current_scroll_position < chosen_position_5) {
active_section = section_index(chosen_position_4);
} else if (current_scroll_position >= chosen_position_5 && current_scroll_position < chosen_position_6) {
active_section = section_index(chosen_position_5);
} else if (current_scroll_position >= chosen_position_6 && current_scroll_position < chosen_position_final) {
active_section = section_index(chosen_position_6);
} else {
active_section = 'You have reached the end';
}

};

//
// if (current_scroll_position > 300) {
//
// svg_story
// .selectAll("text")
// .transition()
// .duration(1000)
// .attr('opacity', 0)
// .transition()
// .duration(0)
// .remove()
// }
//
// else {
//
// svg_story
// .selectAll("text")
// .transition()
// .duration(0)
// .remove()
//
// svg_story
// .append("text")
// .attr("text-anchor", "middle")
// .attr('id', 'testing1')
// .attr("y", 200)
// .attr("x", svg_width * .5)
// .attr('opacity', 0)
// .transition()
// .duration(1000)
// .attr('opacity', 1)
// .style('font-weight', 'bold')
// .text('I am sitting up here...');
//
// };
