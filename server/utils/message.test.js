var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {

		it('should generate correct message object', () => {
				var from = 'Jambalaya';
				var text = 'Some message';
				var message = generateMessage(from, text);

				expect(message.createdAt).toBeA('number');
				expect(message).toInclude({from, text});
		});

});

describe('generateLocationMessage', () => {

		it('should generate correct location object', () => {
				var from = 'Jambalaya';
				var lat = 15;
				var lng = 19;
				var url = 'https://google.com/maps?q=15,19';
				var message = generateLocationMessage(from, lat, lng);

				expect(message.createdAt).toBeA('number');
				expect(message).toInclude({from, url});
		});

});
