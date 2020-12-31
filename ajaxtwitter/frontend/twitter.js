const FollowToggle = require('./follow_toggle');

$(function () {
    $('button.follow-toggle').each(function(index) {
        const btn = new FollowToggle($(this));
    });
});