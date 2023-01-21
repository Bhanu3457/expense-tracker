var expect  = require('chai').expect;
var request = require('request');
const cheerio = require('cheerio');



describe('Index Page', function(){
	it('Index page content', function(done) {
	    request('http://localhost:8000/index.html' , function(error, response, body) {
	        // expect(body).to.equal('Expense Tracker');
	        if(error) return console.log(error);
	        
	        let $ = cheerio.load(body);
	    	let title = $('title');
	    	expect(title.text()).to.equal('Expense Tracker');

	    	let link_href = $('link').attr('href')
			expect(link_href).to.equal('style.css');
			
			let link_type = $('link').attr('type')
			expect(link_type).to.equal('text/css');

			var list = [];
			var classlist= [];
			$('header').find('nav > a').each(function (index, element) {
				list.push($(element).attr('href'));
				classlist.push($(element).attr('class'))
			});
			
			actual = [ 'index.html', 'login.html', 'register.html', 'expense.html' ]
			expect(list).to.eql(actual);
			expect(classlist).to.eql([ 'current', undefined, undefined, undefined])


			var footer = $('footer')
			expect(footer.text()).to.include('Copyright © 2020 All Rights Reserved');

			var main_content = $('div[class=main-content]').find('h1')
			expect(main_content.text()).to.include("Welcome to the expense tracker system!!!!!")

			var sub_content = $('div[class=main-content] > h3')
			expect(sub_content.text()).to.include("Quote of the day:")

			var sub_content_p = $('div[class=main-content] > p')
			expect(sub_content_p.text()).to.include("Being in control of your finances is a great stress reliever!!!!!")		

			done();
	    })
	})
});

describe('Login Page', function(){
	it('Login page content', function(done) {
	    request('http://localhost:8000/login.html' , function(error, response, body) {
	        // expect(body).to.equal('Expense Tracker');
	        if(error) return console.log(error);
	        
	        let $ = cheerio.load(body);
	    	let title = $('title');
	    	expect(title.text()).to.equal('Login');

	    	let link_href = $('link').attr('href')
			expect(link_href).to.equal('style.css');
			
			let link_type = $('link').attr('type')
			expect(link_type).to.equal('text/css');

			var list = [];
			var classlist = [];
			$('header').find('nav > a').each(function (index, element) {
				list.push($(element).attr('href'));
				classlist.push($(element).attr('class'))
			});

			actual = [ 'index.html', 'login.html', 'register.html', 'expense.html' ]
			expect(list).to.eql(actual);
			expect(classlist).to.eql([ undefined, 'current', undefined, undefined ]);

			var footer = $('footer')
			expect(footer.text()).to.include('Copyright © 2020 All Rights Reserved');

			var list = []
			var typelist = []
			$('div[class=main-content]').find('input').each(function (index, element) {
				list.push($(element).attr('placeholder'));
				typelist.push($(element).attr('type'));

			});
			expect(list).to.eql(['username','password']);
			expect(typelist).to.eql(['text','password']);

			var button = $('div[class=main-content]').find('button')
			expect(button.text()).to.equal('Login');

			var p = $('div[class=main-content]').find('p')
			expect(p.text()).to.include('Not registered?');
			

			var p_a = $('div[class=main-content]').find('p > a')
			expect(p_a.attr('href')).to.equal('register.html');			
			expect(p_a.text()).to.include('Create an account');

			done();
	    })
	})
});


describe('Register Page', function(){
	it('Register page content', function(done) {
	    request('http://localhost:8000/register.html' , function(error, response, body) {
	        if(error) return console.log(error);
	        
	        let $ = cheerio.load(body);
	    	let title = $('title');
	    	expect(title.text()).to.equal('Register');

	    	let link_href = $('link').attr('href')
			expect(link_href).to.equal('style.css');
			
			let link_type = $('link').attr('type')
			expect(link_type).to.equal('text/css');

			var list = [];
			var classlist = [];
			$('header').find('nav > a').each(function (index, element) {
				list.push($(element).attr('href'));
				classlist.push($(element).attr('class'))
			});

			actual = [ 'index.html', 'login.html', 'register.html', 'expense.html' ]
			expect(list).to.eql(actual);
			expect(classlist).to.eql([ undefined,  undefined, 'current', undefined ]);

			var footer = $('footer')
			expect(footer.text()).to.include('Copyright © 2020 All Rights Reserved');

			var list = []
			var typelist = []
			$('div[class=main-content]').find('input').each(function (index, element) {
				list.push($(element).attr('placeholder'));
				typelist.push($(element).attr('type'));

			});
			expect(list).to.eql(['name','password','email address']);
			expect(typelist).to.eql(['text','password','text']);

			var button = $('div[class=main-content]').find('button')
			expect(button.text()).to.equal('Create');

			var p = $('div[class=main-content]').find('p')
			expect(p.text()).to.include('Already registered?');
			

			var p_a = $('div[class=main-content]').find('p > a')
			expect(p_a.attr('href')).to.equal('login.html');			
			expect(p_a.text()).to.include('Sign In');

			done();
	    })
	})
});

describe('Expense Page', function(){
	it('Expense page content', function(done) {
	    request('http://localhost:8000/expense.html' , function(error, response, body) {
	        if(error) return console.log(error);
	        
	        let $ = cheerio.load(body);
	    	let title = $('title');
	    	expect(title.text()).to.equal('Note Expense');

	    	let link_href = $('link').attr('href')
			expect(link_href).to.equal('style.css');
			
			let link_type = $('link').attr('type')
			expect(link_type).to.equal('text/css');

			var list = [];
			var classlist = [];
			$('header').find('nav > a').each(function (index, element) {
				list.push($(element).attr('href'));
				classlist.push($(element).attr('class'))
			});

			actual = [ 'index.html', 'login.html', 'register.html', 'expense.html' ]
			expect(list).to.eql(actual);
			expect(classlist).to.eql([ undefined,  undefined,  undefined, 'current']);

			var footer = $('footer')
			expect(footer.text()).to.include('Copyright © 2020 All Rights Reserved');

			var list = []
			var typelist = []
			$('div[class=main-content]').find('input').each(function (index, element) {
				list.push($(element).attr('placeholder'));
				typelist.push($(element).attr('type'));
			});
			expect(list).to.eql(['What did you spend on?',undefined,'How much?']);
			expect(typelist).to.eql([ 'text', 'date', 'number' ]);
			
			var labels = []
			$('div[class=main-content]').find('label').each(function(index, element){
				labels.push($(element).text())
			})
			expect(labels).to.eql(['Type:', 'Name:', 'Date:','Amount:']);

			var button = $('div[class=main-content]').find('button')
			expect(button.text()).to.equal('Add a new expense');

			var optionlist = []
			$('div[class=main-content]').find('option').each(function (index, element) {
				optionlist.push($(element).text());
				
			})
			
			expect(optionlist).to.eql([ 'Card', 'Cash', 'Cryptocoin', 'Other' ]);
			done();
	    })
	})
});
