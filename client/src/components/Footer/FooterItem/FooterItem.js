import style from './FooterItem.module.css';

const FooterItem = (props) => {
    return (
        <li className={style.listItem}>
            <a>{props.children}</a>
        </li>
    )
}

export default FooterItem;