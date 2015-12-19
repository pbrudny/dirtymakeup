import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
    return this.store.createRecord('contact');
  },

  actions: {
    saveContact: function (newContact) {
      var _that = this;

      newContact.save().then(function (response) {
        _that.transitionTo('contacts');
      })
    },

    willTransition: function (transition) {
      var model = this.controller.get('model');
      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
