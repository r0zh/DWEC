"use script"

function decidir(valor) {
    switch (valor) {
        case "Posts":
            pedirPosts();
            break;

        case "Comments":
            pedirComments();
            break;

        case "Albums":
            pedirAlbums();
            break;

        case "Photos":
            pedirPhotos();
            break;

        case "Users":
            pedirUsers();
            break;
        default:
            break;
    }
}