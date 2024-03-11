const userData = (() => {
  const container = document.querySelector("#user-data");
  return {
    show: async () => {
      let response = await fetch("https://randomuser.me/api/?results=10");
      let data = await response.json();
      const userInfo = data.results
        .map(
          (i) =>
            `<div>
            <hr><img src='${i.picture.large}'/> <!--Traemos imagen de usuario-->
					<div>
						<span><h2>${i.name.first} ${i.name.last} </h2></span> <!--Traemos más datos de usuario-->
						<span><h3>${i.email} </h3></span>
						<span>${i.cell} </span></hr>
					</div>
				</>`
        )
        .join("");
      container.innerHTML = userInfo;
    },
  };
})();
userData.show();
