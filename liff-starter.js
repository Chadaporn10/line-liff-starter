window.onload = function (e) {
    liff.init(function (data) {
	  liff.getProfile().then(function (profile) {
		  var profilePictureDiv = document.getElementById('displayimg');
		    var img = document.createElement('img');
		    img.src = profile.pictureUrl;
		    img.alt = "Profile Picture";
		    profilePictureDiv.appendChild(img);
		//document.getElementById('displayimg').textContent = profile.userId;
		document.getElementById('displayname').textContent = profile.displayName;
	}).catch(function (error) {
		window.alert("Error getting profile: " + error);
	});
    });
	
};
