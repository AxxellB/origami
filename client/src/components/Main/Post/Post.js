import style from './Post.module.css';

const Post = ({
    content,
    author
}) => {
    return (
        <div className={style.post}>
            <img src="blue-origami-bird.png" />
            <p className={style.description}>
                {content}
            </p>
            <div>
                <span>
                    <small>Author:</small>
                    {author}
                </span>
            </div>
        </div>
    )
}

export default Post;