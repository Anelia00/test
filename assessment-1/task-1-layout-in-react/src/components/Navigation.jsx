// The same navigation links are used in the header and footer.
export default function Navigation() {
  return (
    <nav aria-label="Main navigation" className="navigation">
      <a href="#article">Our Blog</a>
      <a href="#albums">Our Artists</a>
      <a href="#author">Our Story</a>
    </nav>
  );
}
