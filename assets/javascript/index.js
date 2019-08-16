$(document).ready(() => {
	console.log("ready");

	//Get git Repos.
	const getGit = () => {
		let baseURL = "https://api.github.com";
		let repos = "/users/afwebdev/repos";

		fetch(`${baseURL}${repos}`, function() {})
			.then(response => response.json())
			.then(data => {
				for (repo of data) {
					if (repo.description) {
						console.log(repo);
						$(".repos").append(`<div class="card"><p>${repo.description}</p></div>`);
					}
				}
			});
	};

	// getGit();
});
