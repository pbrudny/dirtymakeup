import DS from 'ember-data';

export default DS.Model.extend({
  youtube_url: DS.attr('string'),
  description: DS.attr('string')
});
