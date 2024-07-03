import styles from "./page.module.css";
import UserList from "./user-list/UserList";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <UserList />
    </main>
  );
}
