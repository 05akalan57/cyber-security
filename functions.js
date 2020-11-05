firebase.initializeApp({databaseURL: "https://akalan-db.firebaseio.com"});
function add() {
	var post_title = $("#post_title").val();
	var post_img = $("#post_img").val();
	var post_content = $("#post_content").val();
	var post_sub_title = $("#post_sub_title").val();
	var post_code = $("#post_code").val();
	var post_link_title = $("#post_link_title").val();
	var post_link = $("#post_link").val();
	if (post_title != "" && post_img != "" && post_content != "" && post_sub_title != "" && post_code != "" && post_link_title != ""&& post_link != "") {
		firebase.database().ref("siber-guvenlik/" + post_title).set({
			title: post_title,
			img: post_img,
			content: post_content,
			sub_title: post_sub_title,
			code: post_code,
			link_title: post_link_title,
			link: post_link
		});
		setTimeout("location.href = 'index.html';",2000);
	} else {
		alert("Tüm alanları doldurun !!!");
	}
}
function loadPosts() {
	var query = firebase.database().ref("siber-guvenlik/");
	query.on('value', function(snapshot) {
		$("#posts").html("");
		snapshot.forEach(function(childSnapshot) {
			var data = childSnapshot.val(); {
				var post = `<div style="line-height: 1.75em;" class="mt-5 mb-5"><h2><strong>` + data.title + `</strong></h2><img width="300" class="rounded" src="` + data.img + `"><p class="mb-4 mt-3">` + data.content + `</p><h5>` + data.sub_title + `</h5><code style="color: #fff; background-color: #1c1c1c;" class="p-2 rounded mt-5">$ ` + data.code + `</code><br><br><h6>` + data.link_title + `</h6><a href="` + data.link + `" target="_blank">LİNK</a></div>`;
				$("#posts").append(post);
			}
		});
	});
}