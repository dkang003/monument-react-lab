import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Archive from './components/Archive';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  

  render() {
    const articles = [
      {
        title:"Issue Twenty &mdash; The Southwest",
        image:"images/article_1.jpg",
        body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.",
        link:"#"
      },
      {
        title:"Issue Nineteen &mdash; Camping",
        image:"images/article_2.jpg",
        body:"Maiores qui doloremque suscipit molestias. Saepe omnis dolore, ipsum voluptatem quisquam eveniet repellat! Eius in vero, cum dolorem ad earum, dignissimos quasi qui obcaecati, minima, esse aliquid beatae. Placeat, adipisci temporibus suscipit neque assumenda earum perferendis autem voluptatem nostrum ipsa porro, voluptas cumque ullam et reiciendis deserunt eos aspernatur esse laudantium cum natus cupiditate nesciunt. Nostrum doloremque odio maiores, quis architecto vero unde error, obcaecati ullam esse soluta et incidunt. Totam quaerat unde doloribus inventore sapiente molestiae, rem? Dolor, est.",
        link:"#"
      },
      {
        title:"Issue Eighteen - Food",
        image:"images/article_3.jpg",
        body:"Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?",
        link:"#"
      }
    ];

    return (
      <main>
        <NavBar />
        <Header />
        <section>
          <h2>From the Archive</h2>
          <div class="grid-wrapper articles">
            <Archive articles={articles} />
          </div>
        </section>
        <About />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    );
  }
}

export default App;
