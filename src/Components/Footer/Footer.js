import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"
import logo from '../Assets/boneka footer.png'

const Footer = () => {
  return (
    <div className="background">
      <div className="row row-1">

        <div className="col-md-3 footer-menu footer-icon">
          <div className="footer-apps">
            <h6 className="hidden-xs hidden-sm">
              APLIKASI
              <span className="pt-icon-standard pt-icon-chevron-down bt-caret"></span>
            </h6>
            <a href="https://play.google.com/store/apps/details?id=bmd.android.apps&amp;utm_source=bhinneka.com&amp;utm_campaign=bhinneka_website_footer&amp;pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1%27">
              <img
                className="img-responsive playstore"
                src="//static.bmdstatic.com/sf/assets/img/google-play-badge.png"
                alt="Tautan Google Play Store"
              ></img>
            </a>
            <a href="https://itunes.apple.com/id/app/bhinneka/id1446537328">
              <img
                className="img-responsive"
                src="//static.bmdstatic.com/sf/assets/img/Download_on_the_App_Store_Badge_ID_135x40.svg"
                alt="Tautan App Store"
              ></img>
            </a>
          </div>
          <div className="footer-socmed">
            <h6 className="hidden-xs hidden-sm">LET'S GET SOCIAL</h6>
            <ul className="list-inline">
              <li>
                <a href="https://www.facebook.com/bhinnekacom" target="_blank">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bhinneka" target="_blank">
                <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bhinnekacom/"
                  target="_blank"
                >
                 <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/bhinnekacom/" target="_blank">
                <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://blog.bhinneka.com/" target="_blank">
                <i className="fa fa-wordpress"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=628121238000"
                  target="_blank"
                >
                  <i className="fa fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 footer-menu">
          <h6>
            BONEKA
            <span className="pt-icon-standard pt-icon-chevron-down bt-caret"></span>
          </h6>
          <ul className="list-unstyled">
            <li>
              <a href="/tentang-kami">Tentang Kami</a>
            </li>
            <li>
              <a href="https://b2b.id/?utm_source=bhinnekacom" target="_blank">
                b2b.id
                <sup>Beta</sup>
              </a>
            </li>
            <li>
              <a
                href="http://career.bhinneka.com/?utm_source=bhinnekacom&amp;utm_medium=link&amp;utm_campaign=job_bhinnekarir"
                target="_blank"
              >
                Karir
              </a>
            </li>
            <li>
              <a href="/akun-bhinneka">Akun Bhinneka</a>
            </li>
            <li>
              <a href="/hubungi-kami">Hubungi Kami</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 footer-menu">
          <h6>
            INFORMASI LAYANAN
            <span class="pt-icon-standard pt-icon-chevron-down bt-caret"></span>
          </h6>
          <ul className="list-unstyled">
            <li>
              <a href="https://google.com">Pengembalian Barang</a>
            </li>
            <li>
              <a href="https://google.com">Servis dan Purna Jual</a>
            </li>
            <li>
              <a href="https://google.com">Syarat dan Kondisi</a>
            </li>
            <li>
              <a href="https://google.com">Kebijakan Privasi</a>
            </li>
            <li>
              <a href="https://google.com">Lokasi Toko</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 footer-menu">
          <div className="footer-call-center">
            <h6>CONTACT CENTER</h6>
            <ul className="list-unstyled">
              <li>
                <a href="https://api.whatsapp.com/send?phone=628121238000"
                target="_blank"><span><i className="fa fa-phone"> (021) 2929-2828</i></span></a>
              </li>
              <li>
              <a
                href="https://api.whatsapp.com/send?phone=628121238000"
                target="_blank"
              ><span><i className="fa fa-whatsapp"> 0812-123-8000</i></span></a>
              </li>
            </ul>
          </div>
          <div className="footer-security">
            <h6>STANDAR KEAMANAN</h6>
            <a
              href="https://www.certipedia.com/quality_marks/0000069547?locale=en"
              target="_blank"
            >
              <img src="//static.bmdstatic.com/sf/assets/img/tuv-x200.jpg"></img>{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="row-credit">
          <div className="row row-1">
            <div className="col-sm-12">
              <div className="credit-image">
                <img src={logo}></img>
                <br></br>
                <br></br>
                <small>© 2019 PT. Boneka</small>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  
  );
};

export default Footer;
