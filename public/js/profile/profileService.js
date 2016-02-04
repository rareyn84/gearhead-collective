angular.module('gcApp').service('profileService', function() {

this.profileData = [
  {
    user_name: 'Frank D. Mullhauser',
    user_id: '23432345',
    city: 'Santa Barbara',
    state: 'California',
    country: 'United States',
    daily_driver: {
      year: 1973,
      make: 'Plymouth',
      model: 'Valiant',
      trim: '',
      description: '383 Hemi.  Nuff said.'
      },
    age: 34,
    street_cred_points: 234,
    street_cred_level: 3, //3 = Captian Competent or something
    favorite_brands: ['Plymouth', 'Datsun', 'Chevrolet'],
    current_project: [
      {
      year: 1964,
      make: 'Chevrolet',
      model: 'Corvair',
      trim: 'Corsa',
      vehicle_category: 'classic/muscle',
      project_description: 'Doing an LS3 swap baby! Resto-mod for life!'
    }
    ],
    other_cars: [{}],
    areas_of_expertise: ['LS swaps', 'muscle cars'],
    hobbies: ['tennis', 'underwater basket weaving']
  }
]
});
