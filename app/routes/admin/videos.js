import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('video');
  },
  actions: {
    deleteVideo: function(video) {
      var confirmation = confirm('Are you sure?');
      if (confirmation) {
        video.destroyRecord();
      }
    }
  }
});
