const expect = require('expect');

const {Users} = require('./users.js');

describe('Users', () => {

		var users;

		beforeEach(() => {
				users = new Users();
				users.users = [{
						id: '1',
						name: 'one',
						room: 'node'
				}, {
						id: '2',
						name: 'two',
						room: 'react'
				}, {
						id: '3',
						name: 'three',
						room: 'node'
				}];
		});

		it('should add new user', () => {
				var users = new Users();
				var user = {
						id: '123',
						name: 'crawfish',
						room: 'onthebayou'
				};
				var resUser = users.addUser(user.id, user.name, user.room);

				expect(users.users).toEqual([user]);
		});

		it('should remove a user', () => {
				var uid = '2';
				var user = users.removeUser(uid);

				expect(user.id).toBe(uid);
				expect(users.users.length).toBe(2);
		});

		it('should not remove user', () => {
				var uid = '10';
				var user = users.removeUser(uid);

				expect(user).toNotExist();
				expect(users.users.length).toBe(3);

		});

		it('should find user', () => {
				var uid = '1';
				var user = users.getUser(uid);

				expect(user.id).toBe(uid);
		});

		it('should not find user', () => {
				var uid = '23';
				var user = users.getUser(uid);

				expect(user).toNotExist();
		});

		it('should return names for node course', () => {
				var userList = users.getUserList('node');

				expect(userList).toEqual(['one', 'three']);
		});

		it('should return names for react course', () => {
				var userList = users.getUserList('react');

				expect(userList).toEqual(['two']);
		});

});
