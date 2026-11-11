const albums = [
  { file: 'all-encores.jpg', name: 'All Encores by Nils Frahm' },
  { file: 'articulation.jpg', name: 'Articulation' },
  { file: 'blurred.jpg', name: 'Blurred' },
  { file: 'encores-2.jpg', name: 'Encores 2 by Nils Frahm' },
  { file: 'eulogy-for-evolution.jpg', name: 'Eulogy for Evolution' },
];

export default function AlbumGallery() {
  return (
    <section className="album-gallery" id="albums" aria-label="Featured album artwork">
      {albums.map((album, index) => (
        <img
          key={album.file}
          className={index === 0 ? 'featured-album' : 'album-cover'}
          src={`/assets/${album.file}`}
          alt={album.name}
        />
      ))}
    </section>
  );
}
