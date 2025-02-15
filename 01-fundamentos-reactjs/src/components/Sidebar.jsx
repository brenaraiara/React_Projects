import { PencilLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} src="https://images.unsplash.com/photo-1590858078095-24c472408dfe?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            
            <div className={styles.profile}>
                <Avatar src="https://images.unsplash.com/photo-1594136976553-38699ae9047c?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                
                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>

    );
}