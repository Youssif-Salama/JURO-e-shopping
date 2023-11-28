import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="d-flex flex-row align-items-center justify-content-between">
                    <div className="footer_logo">
                        <h1 className='p-0 m-0'><a href="/">JURO</a></h1>
                    </div>
                    <div className="developer_info">
                        <a href='https://youssiframadansalama.github.io/YS_Portfolio/' target='_blank' className="portfolio">
                            <i className="fa-solid fa-globe"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/youssif-salama-039506244/' target='_blank' className="linkedIn">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href='https://github.com/YoussifRamadanSalama' target='_blank' className="gitHup">
                            <i className="fa-brands fa-square-github"></i>
                        </a>
                        <a href='tel:01556543218' className="whatsApp">
                            <i className="fa-brands fa-square-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
