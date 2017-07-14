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
      console.log('clicked');
      vm.hidden = !vm.hidden;
    }

    // vm.doComment = function(){
    //   if (this.hideComm == false) {
    //     this.hideComm = true;
    //   } else {
    //     this.hideComm = false;
    //   }
    // }

    vm.submit = function() {
      vm.newpost.votecount = 0;
      vm.newpost.comments = [];
      vm.newpost.created_at = new Date();
      vm.posts.push(vm.newpost);
      vm.sort = '';
      console.log(vm.sort)
      // console.log(vm.newpost);
      delete vm.newpost;
      if (vm.posts.length >= 0) {
        vm.hidden = false;
      }

    }



    vm.comment = function(newpost) {
        newpost.comments.push(vm.commenttext.body);
        // console.log(vm.commenttext.body);
        // console.log(newpost.comments);
        delete vm.commenttext.body;
        newpost.hidecomment = !newpost.hidecomment;
      }

    vm.upvote = function(newpost) {
      // console.log(newpost)
      // console.log(newpost.votecount)
       newpost.votecount += 1;
    }
    vm.downvote = function(newpost) {
      if (newpost.votecount > 0 ) {
        newpost.votecount -= 1;
      }
    }

    vm.togglecomments = function(newpost) {
      newpost.hidecomment = !newpost.hidecomment;
    }

vm.sortvar = function(sortBy){
  vm.sortBy = sortBy
  if(sortBy == '-votecount'){
    vm.sortByWhat = 'Votes'
  } else if(sortBy == 'created_at'){
    vm.sortByWhat = 'Date'
  }else{
    vm.sortByWhat = 'Title'
  }

  console.log(sortBy)
}

   },
   templateUrl: 'post/post.template.html'
});
