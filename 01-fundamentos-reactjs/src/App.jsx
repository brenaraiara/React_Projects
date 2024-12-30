import { Header } from "./components/Header";
import {Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
      <Header/>

     <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post
        author="Diego Fernandes"
        content="Mollit enim ad qui labore esse sit. Sit in laborum anim sunt nostrud ut deserunt commodo. Eu Lorem dolor in laborum. Voluptate consequat magna tempor laborum do et. Amet cupidatat sint anim est ut fugiat adipisicing magna tempor reprehenderit pariatur quis et."
      />
      <Post
       author="Gabriel Buzzi"
       content="Um novo post muito legal"
       />
      </main>
     </div>
    </div>    
  )
}

