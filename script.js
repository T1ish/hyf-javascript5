const searchButton = document.querySelector("#search");
const url = 'https://api.github.com/orgs/HackYourFuture/repos';
const request = new XMLHttpRequest();

searchButton.addEventListener('click', function(){
	console.log("You clicked me!");
	request.open('GET', url);
	request.send();
});

request.addEventListener('load', function (data){
	if(this.status === 200){
		//console.log(request);
		const rawResponse = request.responseText;
		const parsedReponse = JSON.parse(rawResponse);

		shownOnSite(parsedReponse);
	}else {
		console.log("Something is wrong cuz I'm not getting data!");
	}
});

request.addEventListener('error', function(){
	console.log("Some error happened!");
});

function shownOnSite(responseObject){
	const resultDiv = document.querySelector('#showResult');

	for(let i = 0; i < responseObject.length; i++){
		const repoLiElement = document.createElement('li');

        //For the repository JSON page I would've just used "url" from the object but I guess this is an exercise to concatenate string with variables to get the proper link. :) 
		repoLiElement.innerHTML = '<a target="_blank" href="' + responseObject[i].html_url + '">' + responseObject[i].name + '</a>' + ' | ' + '<a target="_blank" href="' + 'https://api.github.com/repos/HackYourFuture/' + responseObject[i].name + '">' + "JSON page" + '</a>';
		resultDiv.appendChild(repoLiElement);     
	} 
}
