import React from "react";
import { Link } from "react-router-dom";

let Article = ({ article, url }) => (
  <>
    <h1>Article #{article}</h1>

    <p>
      Bacon ipsum dolor amet porchetta bacon burgdoggen strip steak pork chop
      kevin shoulder, kielbasa short loin pastrami venison. Cupim fatback
      sirloin chuck ball tip, burgdoggen frankfurter meatloaf beef ribs short
      loin pork short ribs turducken cow pork loin. Chislic ground round sausage
      sirloin, meatloaf tenderloin bresaola doner cow filet mignon frankfurter
      ribeye bacon kevin.
    </p>

    <Link to={url.url.replace(`/${article}`, "")}>Back to Articles</Link>
  </>
);

export default Article;
