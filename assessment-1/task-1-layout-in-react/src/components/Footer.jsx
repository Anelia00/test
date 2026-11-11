import Navigation from './Navigation.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Navigation />
      <p>Copyright © 2023 Erased Disks Ltd.</p>
      <SocialLinks />
    </footer>
  );
}
