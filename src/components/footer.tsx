import { site } from "@/content/site";
import { Arrow } from "./icons";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="/" aria-label="Marlow Auto Detail home">
              <img
                src="/brand/logo-light.svg"
                width="180"
                height="43"
                alt={site.name}
              />
            </a>
            <p>{site.tagline}</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="/#services">
              Find your treatment
              <Arrow />
            </a>
            <a href="/#booking">
              Plan your detail
              <Arrow />
            </a>
            <a href="#top">
              Back to top
              <Arrow className="arrow-up" />
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Marlow Auto Detail</span>
          <span>Manchester. Made for the details.</span>
        </div>
        <div className="footer-word" aria-hidden="true">
          MARLOW<span>.</span>
        </div>
      </div>
    </footer>
  );
}
