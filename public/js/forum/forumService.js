angular.module('gcApp').service('forumService', function() {

  this.getForumData = function() {
    return forumPostData
  }

  this.forumPostData = [
    {
      post_id: '1234',
      post_date: '1/2/15',
      title: 'What to do with the Thingy?',
      author: 'Frank D. Mullhauser',
      author_id: '23432345',
      year: '1964',
      make: 'Chevrolet',
      model: 'Corvair',
      trim: 'Corsa',
      vehicle_category: 'classic/muscle',// or ricer, rock-crawler, etc.
      parts_category: 'Brakes',
      part_status: 'stock', //or aftermarket or swapped?
      part_number: 'f455f-345',
      views: 234,
      text: 'So this thing happened when I did another thing.  It was going and then stuff happened and now I really dont know what I should do.  Is this even the right thingy? Maybe it is the rotary girder? Thanks for your help in advance!'
    }
  ]


});
