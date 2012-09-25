$(function () {

  $('textarea.mention').mentionsInput({
    triggerChar: '(',
    defaultTriggerChar: '(',
    defaultClosingChar: ')',
    minChars: '0',
    trim: true,
    onDataRequest:function (mode, query, callback,triggerChar) {
      var data = [
        { id:1, name:'#1', type:'in' },
        { id:2, name:'#2', type:'in' },
        { id:3, name:'#3', type:'in' },
      ];

      data = _.filter(data, function(item) { return item.name.toLowerCase().indexOf(query.trim().toLowerCase()) > -1 });

      callback.call(this, data);
    }
  });

  $('.get-syntax-text').click(function() {
    $('textarea.mention').mentionsInput('val', function(text) {
      alert(text);
    });
  });

  $('.get-mentions').click(function() {
    $('textarea.mention').mentionsInput('getMentions', function(data) {
      alert(JSON.stringify(data));
    });
  }) ;


});
