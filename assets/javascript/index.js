$(document).ready(() => {
	console.log("ready");

	//Get git Repos.
	const getGit = () => {
		let baseURL = "https://api.github.com";
		let repos = "/users/afwebdev/repos";

		fetch(`${baseURL}${repos}`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				for (repo of data) {
					if (repo.description) {
						$("#repoRow").append(`
					<div class="col-lg-4 col-sm-12 col-md-6 p-2 ">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">${repo.name}</h5>
								<p class="card-text">${repo.description}</p>
							</div>
							<div class="card-body">
								<a href="https://github.com/${repo.full_name}" class="card-link">More info</a>
								<a href="https://afwebdev.github.io/${repo.name}" class="card-link">Deployed</a>

							</div>
						</div>
					</div>`);
					}
				}
			});
	};

	getGit();
});
