import style from './Main.module.css';
import Post from './Post/Post';

const Main = ({
    posts
    }) => {
    console.log(posts);
    return(
        <main className={style.main}>
            <h1>Sooooome heading</h1>
            <div className={style.posts}>
                {posts.map(post =>
                    <Post id={post.id} content={post.content} author={post.author}/>
                )}
            </div>
        </main>
    )
}

export default Main