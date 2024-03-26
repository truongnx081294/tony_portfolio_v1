/* eslint-disable react/no-unescaped-entities */
import ContactIcons from "@/components/contact_icons";
import styles from "@/assets/styles/Home.module.css";
import Link from 'next/link'
import Intro from "@/components/introductions";
import About from "@/components/about";
import Projects from "@/components/projects";

export default function Page() {
  return (
    <div className={styles.container}>
    <main className={styles.main}>
    <div className={styles.left} >
          <div>
            <ContactIcons/>
          </div>

          <div></div>
        </div>

        <div className={styles.content}>
          <Intro/>
          <About/>
          <Projects/>

          <section className={styles.contact}> 
            <div>
            <h1>03.</h1>
            <p>Feel free to reach out!</p>
            <ContactIcons/>
            </div>
          </section>
        </div>
        

        <div className={styles.right}>
          <div>
          <Link href="mailto:phyf3script@gmail.com" target="blank">
              Truongnx081294@gmail.com
          </Link>
          </div>
         </div>
      </main>
      
      <footer >
        <p>Inspired by <span><Link href="https://brittanychiang.com">brittanychiang.com</Link></span>  </p>
      </footer>
    </div>
  );
}
