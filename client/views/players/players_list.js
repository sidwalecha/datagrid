Template.playerslist.rendered = function() {

    var dataSource = new kendo.data.DataSource({
      sort: {
        field: 'score',
        dir: 'desc'
      },
      pageSize: 4
    });

    this.$('#body').kendoListView({
      dataSource: dataSource,
      template: '<tr><td>#:score#</td><td>#:name#</td><td><button class="remove" data-id="#:_id#">X</button></td></tr>'
    });

    this.$('#pager').kendoPager({
      dataSource: dataSource
    });

    this.autorun(function() {
      dataSource.data(Players.find().fetch());
    });
  };

  Template.playerslist.events({
    'click .remove': function(event) {
      Players.remove($(event.target).data('id'));
    }
  });