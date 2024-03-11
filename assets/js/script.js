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
					/** Traemos imagen de usuario*/
					<img src='${i.picture.large}'/>
					<div>
					/** Traemos más datos de usuario*/
						<span>${i.name.first} ${i.name.last} </span></br>
						<span>${i.email} </span></br>
						<span>${i.cell} </span></br>
					</div>
				</>`
        )
        .join("");
      container.innerHTML = userInfo;
    },
  };
})();
userData.show();
