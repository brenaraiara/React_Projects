import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment ({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1594136976553-38699ae9047c?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>

            <div className={styles.commentBox}> 
                <div className={styles.commentContent}>
                    <header>
                      <div className={styles.authorAndTime}>
                      <strong>Diego Fernandes</strong>
                      <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                      </div>

                      <button title="Deletar comentário">
                        <Trash size={24} />
                      </button>
                    </header>
                   
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                            Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>    
    )
}