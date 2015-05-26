Template.addForm.events({
    'submit .addForm': function(event) {

      Players.insert({
        name: event.target.name.value,
        score: Number(event.target.score.value)
      });

      // Clear form
      event.target.name.value = '';
      event.target.score.value = '';

      return false;

    }
  });