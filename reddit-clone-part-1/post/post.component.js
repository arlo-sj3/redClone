angular.module('app', [])
.component('post', {
  controller: function() {
    const vm = this

    vm.$onInit = function() {
      vm.posts = [];
      vm.pluralcomment = ' comments yet';
      vm.hidecomment = false;
      vm.newpost = {};
    }
    vm.formtoggle = function() {
      if (this.hidden == false) {
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    }
    vm.submit = function() {
      vm.newpost.votecount = 0;
      vm.newpost.comments = [];
      vm.newpost.created_at = new Date();
      vm.posts.push(vm.newpost);
      console.log(vm.newpost);
      delete vm.newpost;
      if (vm.posts.length >= 0) {
        this.hidden = true;
      }
    }

    vm.comment = function(newpost, newcomment) {
      console.log(vm.commenttext);
      newpost.comments.push(newcomment);
      console.log(newpost.comments);
      if (newpost.comments.length == 1) {
        vm.pluralcomment = " comment";
      } else {
        vm.pluralcomment = " comments";
      }
    }
    vm.upvote = function() {
       vm.votes += 1;
    }
    vm.downvote = function() {
      if (vm.votes > 0 ) {
        vm.votes -= 1;
      }
    }
    vm.togglecomments = function() {
      if (vm.hidecomment == true) {
        vm.hidecomment = false;
      } else {
        vm.hidecomment = true;
      }
    }
   },
   templateUrl: 'post/post.template.html'
});
