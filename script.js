
const searchButton = document.querySelector("#search");


searchButton.addEventListener('click', function(){
	console.log("You clicked me!");

	const queryField = document.querySelector("#query");
	//const url = 'https://api.github.com/orgs/HackYourFuture/repos';	
	//You need to know that it's the value attribute's result that you want to go further with. 
	//console.log(queryField.value);
	
	requestUserInfo(queryField.value);
});



function requestUserInfo(userName){
	const url = 'https://api.github.com/users/' + userName + '/repos';	

	const request = new XMLHttpRequest();

	request.addEventListener('load', function (data){
		if(this.status === 200){
			//console.log(request);
			const rawResponse = request.responseText;
			const parsedReponse = JSON.parse(rawResponse);

			shownOnSite(parsedReponse, userName);
		}else {
			console.log("Something is wrong cuz I'm not getting data!");
		}
	});

	request.addEventListener('error', function(){
		console.log("Some error happened!");
	});

	request.open('GET', url);
	request.send();

}



function shownOnSite(responseObject, queryName){
	const resultDiv = document.querySelector('#showResult');
	resultDiv.innerHTML = null;

	for(let i = 0; i < responseObject.length; i++){
		const repoLiElement = document.createElement('li');

        //For the repository JSON page I would've just used "url" from the object but I guess this is an exercise to concatenate string with variables to get the proper link. :) 
		repoLiElement.innerHTML = '<a target="_blank" href="' + responseObject[i].html_url + '">' + responseObject[i].name + '</a>' + ' | ' + '<a target="_blank" href="' + 'https://api.github.com/repos/' + queryName + '/' + responseObject[i].name + '">' + "JSON page" + '</a>';
		resultDiv.appendChild(repoLiElement);     
	} 
}
