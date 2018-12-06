window.onload = function (e) {
    liff.init(function (data) {
	  liff.getProfile().then(function (profile) {
		document.getElementById('displayimg').textContent = profile.userId;
		document.getElementById('displayname').textContent = profile.displayName;
	}).catch(function (error) {
		window.alert("Error getting profile: " + error);
	});
    });
	
};
