angular.module('app', [])
  .component('post', {
    controller: function() {
      const vm = this

      vm.$onInit = function() {
        vm.posts = [];
        vm.pluralcomment = ' Comments';
        vm.hidecomment = false;
        vm.newpost = {};
        vm.sortBy = 'Votes';
        vm.sortByWhat = 'Votes';
        vm.hidden = false;
      }

      vm.formtoggle = function() {
        vm.hidden = !vm.hidden;
      }

      vm.submit = function() {
        vm.newpost.votecount = 0;
        vm.newpost.comments = [];
        vm.newpost.created_at = new Date();
        vm.posts.push(vm.newpost);
        vm.sort = '';
        delete vm.newpost;
        if (vm.posts.length >= 0) {
          vm.hidden = false;
        }
      }

      vm.comment = function(newpost) {
        newpost.comments.push(vm.commenttext.body);
        delete vm.commenttext.body;
      }

      vm.upvote = function(newpost) {
        newpost.votecount += 1;
      }
      vm.downvote = function(newpost) {
        if (newpost.votecount > 0) {
          newpost.votecount -= 1;
        }
      }

      vm.togglecomments = function(newpost) {
        newpost.hidecomment = !newpost.hidecomment;
      }

      vm.sortvar = function(sortBy) {
        vm.sortBy = sortBy
        if (sortBy == '-votecount') {
          vm.sortByWhat = 'Votes'
        } else if (sortBy == 'created_at') {
          vm.sortByWhat = 'Date'
        } else {
          vm.sortByWhat = 'Title'
        }
      }
    },
    templateUrl: 'post/post.template.html'
  });
