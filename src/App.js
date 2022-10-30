
import slack from './slack.png';
import profile from './identity.png';
import github from './github-logo.png';
import zuri from './zuri.png';
import ingress from './ifg.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">


      <div className=" container container-fluid">

        <div className="profile">
          <div>
            <img className="img-responsive" src={profile} alt="" id="profile_img" />
          </div>
          <div>

            <p id="twittter">@smartPYJ_</p>
          </div>
        </div>


        <a className="btn well " href=""> Twitter link</a>


        <a className="btn well  " href="https://training.zuri.team/" id="btn_zuri"> Zuri Teams </a>


        <a className="btn well " href="https://books.zuri.team/" id="books"> Zuri Books</a>


        <a className="btn well " href="https://books.zuri.team/python-for-beginners?ref_id=smartpyj" id="book_python">
          Python Books </a>


        <a className="btn well " href="https://background.zuri.team/" id="pitch"> Background Check for Coders</a>

        <a className="btn well " href="https://books.zuri.team/design-rules" id="book_design"> Design Books</a>

        <div className="profile">
          <div>
            <img className="img-responsive platform " src={slack} alt="" />

            <img className="img-responsive platform" src={github} alt="" />
          </div>
        </div>

      </div>


      <footer className="footer">
        <hr />
          <div className="row">

            <div className="col-sm">
              <img className="img-responsive myimg first" src={zuri} alt="" />
            </div>
            <div className="col-sm footer-text middle">
              HNG Internship 9 Frontend Task
            </div>
            <div className="col-sm last">
              <img className="img-responsive myimg" src={ingress} alt="" />
            </div>
          </div>
      </footer>


    </div>
  );
}

export default App;
