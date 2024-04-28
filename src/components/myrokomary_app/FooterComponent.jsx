export default function FooterComponent() {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className="footer-basic">
                    <footer>
                        <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a
                            href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i
                            className="icon ion-social-twitter"></i></a><a href="#">
                            <i className="icon ion-social-facebook"></i></a>
                        </div>
                        <ul className="list-inline">
                            <li className="list-inline-item"><a href="#">Home</a></li>
                            <li className="list-inline-item"><a href="#">Services</a></li>
                            <li className="list-inline-item"><a href="#">About</a></li>
                            <li className="list-inline-item"><a href="#">Terms</a></li>
                            <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                        </ul>
                        <p className="copyright">Saa© 2024</p>
                    </footer>
                </div>
            </div>
        </footer>
    );
}
