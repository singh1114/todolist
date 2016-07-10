

//create a array to store all the properties of issues.

allissues = []; //there might be an error 
issue = [];
//Create a click event to run when the button to show issues is clicked.

Template.githubapi.events( {
	'click .showallissues' :function(event) {
		event.preventDefault(); // prevent the default action from happening

		//Taking input from the input fields and creating their variables

var githubUn = $('#githubusername').val();
var githubRn = $('#githubreponame').val();

//Creating a variable that will contain the api url where all issues are present
//in the JSON format.

var varurl = 'https://api.github.com/repos'; //basic url structure of github api
varurl += '/'+githubUn; // Add the username to the basic url
varurl += '/'+githubRn; // Add the reponame to the basic url 
varurl += '/issues'; // Add the issues to the basic url

		$.ajax({
			url: varurl, //our variable url that we have created.
			dataType: 'json', //datatype is in json format
			type: 'get', // request is sent in the json format
			cache: false, // no idea about this
			//success function loads data when received from given url
			success: function(data) {
				//Add items to allissues array
				addtoallissues(data);
				addissue();
				console.log(allissues[0].imageofperson);
				console.log(issue[2].issuedby);
				//nowgo();
				
				var stopvariable = setInterval(function(){ var x=0;x=name(x);console.log(x);if(x==1){stop();} }, 3000);
				function stop(){
					clearInterval(stopvariable);
				}
			}
		});
	}

});

// To show the issues on the page we have to create a helper


function name(x){
	Template.issues.helpers({
		issue: issue
	});
	FlowRouter.go("/githubapi/issues");
	console.log(issue[8]);
	x++;
	return x;
}

function addtoallissues(data){
	for(let i=0; i<data.length; i++){
	 	// for loop to iterate on each issue
		allissues.push({
			imageofperson: data[i].user.avatar_url,
			issuename: data[i].title,
			// something is left.
			issuedby: data[i].user.login
		});
	}
}

function addissue(){
	for(let i=0; i<allissues.length; i++){
		issue.push({			
			imageofperson: allissues[i].imageofperson,
			issuename: allissues[i].issuename,
			issuedby: allissues[i].issuedby
		});
	}
}

/*function nowgo(){
	console.log(issue[0]);
	FlowRouter.go("/githubapi/issues");
	for(let i=0; i<issue.length; i++){
		functionlayer2(i);
	}
}

function functionlayer2(i){
	var layer1 = $('.showIssues');
	var image = document.createElement("img");
	image.src = issue[i].imageofperson;
	image.style.width = "200px";
	image.style.height = "100px";
	image.style.marginTop = "20px";
	layer1.append(image);
	var issueName = document.createElement("h3");
	issueName.innerHTML = "Issue Name : "+issue[i].issuename+"<br/><br/>";
	issueName.style.display = "inline-block";
	layer1.append(issueName);
	var issuedBy = document.createElement("h4");
	issuedBy.innerHTML = "Issue created By : "+issue[i].issuedby+"<br/>";
	issuedBy.style.display = "inline-block";
	layer1.append(issuedBy);
}*/

