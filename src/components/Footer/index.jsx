import "./Footer.css";
const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
            <a href='https://www.facebook.com/millo.jaslo.5/' target='blank'>
                <img src="/img/facebook.png" alt="Facebook"/>
            </a>
            <a href='https://twitter.com/EmilioJasso14' target='blank'>
                <img src="/img/twitter.png" alt="twitter" />
            </a>
            <a href='https://www.instagram.com/millojaslo/' target='blank'>
                <img src="/img/instagram.png" alt="instagram" />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Emilio Jasso</strong>
    </footer>
}
export default Footer;