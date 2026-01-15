import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.badge}>Coming Soon</div>
          <h1 className={styles.title}>Zendvo</h1>
          <p className={styles.description}>
            The future of decentralized finance, simplified. Experience a
            borderless, secure, and high-yield ecosystem designed for everyone.
          </p>
          <div className={styles.cta}>
            <Button variant="primary" size="lg">
              Join the Waitlist
            </Button>
            <Button variant="outline" size="lg">
              Explore Docs
            </Button>
          </div>
        </main>
      </div>
    </>
  );
}
