### `O QUE É`

<h1 align="center">
    <sub>
        <img src="https://create-react-app.dev/img/logo.svg" height="40" width="40">
    </sub>
    Youtube-React
</h1>

Um Frontend do youtube com as partes mais essênciais numa só página
A Ideía é fazer um frontend que acesse uma API extarna e anônima que busque dados do youtube
e entregue uma experiência similar ao youtube porém com anonimato.


### `To-Do`
<!-- ✓ Nada -->
𐄂 Pesquisa
𐄂 Vizualização Anônima
𐄂 Videos Recomendados
𐄂 Playlist Local
𐄂 Playlist remota
𐄂 Adicionar/Remover Playlists
𐄂 Comentários
𐄂 Descrição
𐄂 Design responsivo para uso adequado em PWA
𐄂 Tradução


Por hora irei usar a API do Indivious por não necessitar servidor
https://docs.invidious.io/authenticated-endpoints/

Fazer em algum momento o backend usando:
    - [node-ytdl-core](https://github.com/fent/node-ytdl-core)
    - [node-ytsr](https://github.com/TimeForANinja/node-ytsr)
    - [node-ytpl](https://github.com/TimeForANinja/node-ytpl)
    - [yt-comment-scraper ](https://github.com/FreeTubeApp/yt-comment-scraper)
e torna-lo retrocompativel com a do Indivious, pondendo selecionar qual usar no pŕoprio front end
é possível se basear no [ViewTube](https://github.com/ViewTube/viewtube-vue) para isso.



### `npm start`

Runs the app in the development mode.
Open (http://localhost:3000)[http://localhost:3000]

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### [DEPLOY](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### [PWA - Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)