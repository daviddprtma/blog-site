import Header from "../components/Header";
import { my_authors } from "../authors";
import { useLocation} from "react-router-dom";
 
const AuthorPage = () => {
  let {state} = useLocation()
  return ( 
    <div>
      <Header/>
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">{my_authors.title}</h1>
          <div className="blog-subcontents">
          <img src="./img/david.jpg" className="hero-image"/>
          <p style={{textAlign: "center", fontSize: 30}}>X</p>
          <img src="./img/header.jpg" className="hero-image2"/>
          </div>
          <div className="blog-content">
            <p className="blog-text">{my_authors.content}</p>
          </div>
        </div>
      </div>
      </div>
  );
}
 
export default AuthorPage;