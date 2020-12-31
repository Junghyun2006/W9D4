class FollowToggle {
    constructor($el) {
        this.$el = $el;
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.render()
    }

    render() {
        if (this.followState === 'followed') {
            this.$el.text('unfollow');
        } else {
            this.$el.text('follow');
        }
    };
}

module.exports = FollowToggle;