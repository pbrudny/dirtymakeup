import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('invitation');
  },
  actions: {
    saveInvitation: function(newInvitation) {
      var _that = this;
      newInvitation.save().then(function(response) {
          _that.controller.set('model.email', '');
          _that.controller.set('responseMessage', "Thank you! We've just saved your email address with following id: " + response.get('id'));

        }
      );
    }
  }
});
