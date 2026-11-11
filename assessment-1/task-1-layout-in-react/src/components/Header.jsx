import Navigation from './Navigation.jsx';

export default function Header() {
  return (
    <header className="site-header">
      <a href="#article" aria-label="Erased Tapes blog home" className="logo-link">
        <img className="site-logo" src="/assets/logo.svg" alt="Erased Tapes logo" />
      </a>
      <Navigation />
    </header>
  );
}
