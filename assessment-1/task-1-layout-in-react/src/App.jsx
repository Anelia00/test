import Header from './components/Header.jsx';
import Article from './components/Article.jsx';
import AlbumGallery from './components/AlbumGallery.jsx';
import Author from './components/Author.jsx';
import Comments from './components/Comments.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main className="page-content">
        <Article />
        <AlbumGallery />
        <Author />
        <Comments />
      </main>
      <Footer />
    </>
  );
}
