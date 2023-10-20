import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "/images/image1.jpg", width: 800, height: 600 },
    { src: "/images/image2.jpg", width: 1600, height: 900 },
];

export default function Gallery() {
    return <PhotoAlbum layout="rows" photos={photos} />;
}