const searchButton = document.querySelector("#search");

searchButton.addEventListener('click', function(){
	console.log("You clicked me!");
});


const url = 'https://api.github.com/orgs/HackYourFuture/repos';

const request = new XMLHttpRequest();

request.addEventListener('load', function(data){
	if(this.status === 200){
		console.log(request);
		const rawResponse = request.responseText;
		const parsedReponse = JSON.parse(rawResponse);
		console.log(parsedReponse);

	}else {
		console.log("Something is wrong cuz I'm not getting data!");
	}



});

request.addEventListener('error', function(){
	console.log("Some error happened!");
});

request.open('GET', url);

request.send();

