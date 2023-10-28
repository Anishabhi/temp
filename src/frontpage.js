import React from 'react';
import front from './front.css'

function FrontPage() {
  return (
    <div>
     
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="header">
        <h2>Intellectual Property Rights</h2>
      </div>
      <div className="container">
        <div className="card">
          <h2>Copyright</h2>
          <p>
            Copyright is a legal protection granted to the original creators of various forms of creative work, such as literature, music, and art. It gives creators exclusive rights to reproduce, distribute, and display their work.
          </p>
          <img src="download.png" alt="Copyright" />
        </div>
        <div className="card">
          <h2>Patent</h2>
          <p>
            A patent is a government grant that provides inventors with exclusive rights to their inventions for a certain period. It prevents others from making, using, or selling the patented invention without permission.
          </p>
          <img src="patent1.png" alt="Patent" />
        </div>
        <div className="card">
          <h2>Design</h2>
          <p>
            Design rights protect the unique visual design and appearance of products. They prevent others from copying or imitating the design of a product.
          </p>
          <img src="Design_Guard1.png" alt="Design" />
        </div>
        <div className="card">
          <h2>Trademark</h2>
          <p>
            A trademark is a symbol, word, or phrase that distinguishes one company's goods or services from others. It helps establish brand identity and prevents others from using similar marks.
          </p>
          <img src="trademark1.png" alt="Trademark" />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
