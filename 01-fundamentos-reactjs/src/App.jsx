import { Header } from "./components/Header";
import {Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
      author: {
      avatarUrl: 'https://images.unsplash.com/photo-1594136976553-38699ae9047c?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa 👋,'},
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    { type: 'link', content: 'jane.design/doctorcare'}, 
  ],
  publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
  id: 2,
    author: {
    avatarUrl: 'https://plus.unsplash.com/premium_photo-1682125148697-581ce1425d5e?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Maik Brito',
    role: 'Educator @Rocketseat'
},
content: [
  { type: 'paragraph', content: 'Fala galeraa 👋,'},
  { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
  { type: 'link', content: 'jane.design/doctorcare'}, 
],
publishedAt: new Date('2022-05-10 20:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header/>

     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(posts => {
            return (
              <Post 
              key={posts.id}
              author={posts.author}
              content={posts.content}
              publishedAt={posts.publishedAt}
              />
        )
        })}
      </main>
     </div>
    </div>    
  )
}

