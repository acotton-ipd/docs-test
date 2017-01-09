/**
* @file Home or Workspace component
* @author IPDemons
* @description The Home components is the app container holding all the pieces of the UI
* as well as some *'global'* properties.
*/

angular.module('app').component('home', {

	/**
	 * @
	 *
	 */

	templateUrl: 'home/home.html',
	bindings: {
		groupId: '=groupID'
	},
	controller: function() {

		this.groupID = 'groupkey1';

		this.loadGroup1 = function() {
			this.groupID = 'groupkey1';
		};
		this.loadGroup2 = function() {
			this.groupID = 'groupkey2';
		};

	}

});
