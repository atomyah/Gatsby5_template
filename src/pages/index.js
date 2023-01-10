import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import * as styles from "../components/index.module.css"

const IndexPage = () => (
    <Layout>
      <div className="home-container">
            <StaticImage src="../images/home.png"
                width={834}
                alt="トップ画像"
                placeholder="blurred"
            />

        <div className="sec">
          <section className="sec1">
            <h2>インフォメーション</h2>
            <ul>
              <li>記事○○○○</li>
              <li>記事○○○○</li>
              <li>記事○○○○</li>
              <li>記事○○○○</li>
            </ul>
          </section>
          <section className="sec2">
            <h2>IR情報</h2>
            <ul>
              <li>IR情報</li>
              <li>社長ブログ</li>
              <li>広告スペース</li>
              <li>広告スペース</li>
            </ul>
          </section>
        </div>

        <div className="page-title">
          <h2>事業内容</h2>
        </div>

        <div className="card-container">
          <section className="card">
            <StaticImage className="card-img" src="../images/jigyo1.jpg" alt="" />
              <div className="card-content">
                <h1 className="card-title">軌道上デブリ除去</h1>
                <p className="card-text">軌道上または航行導線上のデブリを安全除去します。</p>
              </div>
              {/*
              <div className="card-link">
                <a href="#">About</a>
              </div> 
              */}         
          </section>
          <section className="card">
            <StaticImage className="card-img" src="../images/jigyo2.jpg" alt="" />
              <div className="card-content">
                <h1 className="card-title">テレポーテーションゲート開設</h1>
                <p className="card-text">テレポーテーション用のトンネルゲート開設業務を承ります。</p>
              </div>   
          </section>
          <section className="card">
            <StaticImage className="card-img" src="../images/jigyo3.jpg" alt="" />
              <div className="card-content">
                <h1 className="card-title">業子力学での量子コントロール</h1>
                <p className="card-text">業子力学による量子コントロール実験を進めております。</p>
              </div>    
          </section>
        </div>

      </div>
    </Layout>
  )

  export const Head = () => <Seo title="ヤー・スペーステック" />
  
  export default IndexPage