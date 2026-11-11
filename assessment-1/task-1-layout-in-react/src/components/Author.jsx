import SocialLinks from './SocialLinks.jsx';

export default function Author() {
  return (
    <section className="author" id="author">
      <div className="author-text">
        <h2>The Author</h2>
        <p>Sapien leo scelerisque per convallis torquent nunc. Lobortis eleifend a nam sit turpis nostra. Tempus suspendisse libero curae faucibus lobortis litora bibendum praesent! Eget quam magna, diam commodo interdum sapien magnis.</p>
      </div>
      <img className="author-photo" src="/assets/profile_picture.jpg" alt="Portrait of the article author" />
      <SocialLinks />
    </section>
  );
}
