export default function HeaderLinks() {
  return (
    <section id="page-header">
      <div className="container">
        <div className="row">
          <div className="col-1-5">
            <img src="/dc-logo.png" alt="" />
          </div>
          <div className="col-1-3">
            <nav>
              <ul>
                <li>
                  <a href="#">CHARATTERS</a>
                </li>
                <li className="active">
                  <a href="#">COMICS</a>
                </li>
                <li>
                  <a href="#">MOOVIE</a>
                </li>
                <li>
                  <a href="#">TV</a>
                </li>
                <li>
                  <a href="#">GAMES</a>
                </li>
                <li>
                  <a href="#">VIDEO</a>
                </li>
                <li>
                  <a href="#">FANS</a>
                </li>
                <li>
                  <a href="#">NEWS</a>
                </li>
                <li>
                  <a href="#">SHOP</a>
                </li>
                <li>
                  <a href="#">COLLECTIBLES</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
