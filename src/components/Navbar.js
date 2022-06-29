import { Component, tags, router } from "@odoo/owl";
const Link = router.Link;

const NAVBAR_TEMPLATE = tags.xml/*xml*/ `
<nav class="navbar navbar-light">
    <div class="container">
        <!-- <a class="navbar-brand" href="index.html">conduit</a> -->
        <Link to="'HOME'" class="navbar-brand">conduit</Link>
        <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
                <!-- Add "active" class when you're on that page" -->
                <Link to="'HOME'" class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="'EDITOR'" class="nav-link"><i class="ion-compose"></i> New Post</Link>
            </li>
            <li class="nav-item">
                <Link to="'SETTINGS'" class="nav-link"><i class="ion-gear-a"></i> Settings</Link>
            </li>
            <li class="nav-item">
                <Link to="'LOG_IN'" class="nav-link">Sign in</Link>
            </li>
            <li class="nav-item">
                <Link to="'REGISTER'" class="nav-link">Sign up</Link>
            </li>
            <li class="nav-item">
                <Link to="'PROFILE'" class="nav-link">Coding Dodo</Link>
            </li>
        </ul>
    </div>
</nav>
`;
export class Navbar extends Component {
  static template = NAVBAR_TEMPLATE;
  static components = { Link };
}
