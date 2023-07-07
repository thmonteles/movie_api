const apiKey = 'acc24d38c47b282c2ee0e04918eb95b4';
const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

axios.get(url)
  .then(response => {
    const filmes = response.data.results;
    const printDiv = document.getElementById('print');
    const routeDiv = document.querySelector('.route');

    let filmesHTML = '';

    let rota = '';

    if (url.includes('now_playing')) {
      rota = 'Filmes em cartaz';
    } else if (url.includes('upcoming')) {
      rota = 'Próximos lançamentos';
    } else if (url.includes('top_rated')) {
      rota = 'Mais bem avaliados';
    } else if (url.includes('popular')) {
      rota = 'Filmes Populares';
    } else {
      rota = 'Rota desconhecida';
    }

    routeDiv.textContent = rota;

    filmes.forEach(filme => {
      const imagemURL = `https://image.tmdb.org/t/p/w500/${filme.poster_path}`;

      filmesHTML += `
        <div class="filme">
          <img class="imagemCartaz" style="width: 200px" src="${imagemURL}"></div>
          <div class="title">${filme.title}</div>
          <div class="classificacao">${filme.vote_average}</div>
        </div>
      `;
    });

    printDiv.innerHTML = filmesHTML;
  })
  .catch(error => {
    console.error(error);
  });
