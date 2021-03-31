import style from './Footer.module.css';
import FooterItem from './FooterItem/FooterItem'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul>
                <FooterItem>Going to 1</FooterItem>
                <FooterItem>Going to 2</FooterItem>
                <FooterItem>Going to 3</FooterItem>
                <FooterItem>Going to 4</FooterItem>
                <FooterItem>Going to 5</FooterItem>
                <FooterItem>Going to 6</FooterItem>
                <FooterItem>Going to 7</FooterItem>
                <FooterItem>Going to 8</FooterItem>
                <FooterItem>Going to 9</FooterItem>
                <FooterItem>Going to 10</FooterItem>
                <FooterItem>Going to 11</FooterItem>
                <img src="blue-origami-bird-flipped.png"></img>
            </ul>
            <p>
                Software University © 2019
            </p>
        </footer>
    )
}

export default Footer;