function Footer() {
    return (
        <footer className="container">
            <div className="socials">
                <a className="social-link" href="/">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                <a className="social-link" href="/">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a className="social-link" href="/">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a className="social-link" href="/">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
            </div>
            <p className="copyright-text">&copy; 2024 - All rights reserved</p>
        </footer>
    );
}

export { Footer };