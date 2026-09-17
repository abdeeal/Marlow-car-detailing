import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export const metadata: Metadata = {
  title: "Privacy & Photo Credits — Marlow Auto Detail",
};
export default function Privacy() {
  return (
    <>
      <Header simple />
      <main id="main" className="article container">
        <h1>Privacy & photo credits.</h1>
        <h2>Your detail brief</h2>
        <p>
          The detail planner uses your vehicle and treatment choices to create a
          text file in your browser. Entries are held in page memory and are not
          sent to a server or saved in cookies or browser storage. Saving a
          brief downloads a file to your device. It does not reserve an
          appointment.
        </p>
        <h2>Website requests</h2>
        <p>
          Your browser requests pages, scripts, styles, fonts and photographs
          from the website host. No analytics or tracking scripts are included.
          The hosting provider may process technical connection information to
          serve these files.
        </p>
        <h2>Photography</h2>
        <p>
          Editorial automotive photographs are sourced from Unsplash. They show
          the craft and culture of car care and are not presented as customer
          projects.
        </p>
        <ul>
          <li>
            <a href="https://unsplash.com/photos/orange-porsche-911-on-road-during-daytime-sUqYDz3iMqs">
              Martin Katler — orange Porsche
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/photos/black-porsche-911-parked-in-garage-i2l7xcV5kIQ">
              Brandon Morales — black Mustang
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/photos/a-man-polishing-the-side-of-a-green-sports-car-yA3Rb0krauM">
              Tyler — detailing photograph
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/photos/a-steering-wheel-and-dashboard-of-a-car-SlK-8hFyKO0">
              Ivan Benets — car interior
            </a>
          </li>
        </ul>
        <a className="button" href="/">
          Back to home
        </a>
      </main>
      <Footer />
    </>
  );
}
