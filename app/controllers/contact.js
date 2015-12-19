import Ember from 'ember';

export default Ember.Controller.extend({

  message: '',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.and('isValidEmail','isValidContent'),
  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidContent: function() {
    return this.get('message').length > 5
  }.property('message'),

  actions: {
    sendMessage: function() {
      var email = this.get('emailAddress');
      var message = this.get('message');
      var _that = this;

      var newMessage = this.store.createRecord('contact', {email: email, message: message});

      newMessage.save().then(function(response) {
        _that.set('responseMessage', "Thank you! We've just saved your email address with following id: " + response.get('id'));
        _that.set('emailAddress', '');
        _that.set('message', '');
        }
      );
    }
  }
});
