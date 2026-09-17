import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";
export default function NotFound() {
  return (
    <>
      <Header simple />
      <main id="main" className="container not-found">
        <p className="error-code">404</p>
        <h1>{site.notFound.title}</h1>
        <p className="lead">{site.notFound.body}</p>
        <a className="button" href="/">
          {site.notFound.action}
        </a>
      </main>
      <Footer />
    </>
  );
}
