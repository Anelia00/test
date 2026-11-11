const socialLinks = [
  { name: 'Facebook', image: 'facebook-icon.png', url: 'https://www.facebook.com/' },
  { name: 'Instagram', image: 'instagram-icon.svg', url: 'https://www.instagram.com/' },
  { name: 'Twitter', image: 'twitter-icon.svg', url: 'https://twitter.com/' },
];

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social media">
      {socialLinks.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
          <img src={`/assets/${social.image}`} alt="" />
        </a>
      ))}
    </div>
  );
}
