import Head from "next/head";
import Link from "next/link";

import "./index.scss";

const Layout = props => {
  return (
    <div className="layout-container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
        <title>next.js bucket</title>
      </Head>
      <ul className="layout-ul">
        <li>
          <a href="/" title="Index">
            Index
          </a>
        </li>
        <li>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </li>
      </ul>
      <section className="page_container">{props.children}</section>
    </div>
  );
};

export default Layout;
