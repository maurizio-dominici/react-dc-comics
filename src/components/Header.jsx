export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-1-5">
            <img src="/dc-logo.png" alt="" />
          </div>
          <div className="col-1-3">
            <nav>
              <ul>
                <li>
                  <a href="#">charaters</a>
                </li>
                <li className="active">
                  <a href="#">comics</a>
                </li>
                <li>
                  <a href="#">moovie</a>
                </li>
                <li>
                  <a href="#">tv</a>
                </li>
                <li>
                  <a href="#">games</a>
                </li>
                <li>
                  <a href="#">video</a>
                </li>
                <li>
                  <a href="#">fans</a>
                </li>
                <li>
                  <a href="#">news</a>
                </li>
                <li>
                  <a href="#">shop</a>
                </li>
                <li>
                  <a href="#">collectibles</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
