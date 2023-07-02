import React from "react";
import Card from "react-bootstrap/Card";
import foodRel from "../images/relationship_with_food.jpeg";

function Guide() {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={foodRel} alt="Card image" />
        <Card.ImgOverlay></Card.ImgOverlay>
      </Card>
      <h1>Relationship with Food</h1>
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim
          sem, bibendum sit amet efficitur sed, pellentesque id risus. Ut eget
          dignissim nibh. Phasellus dictum laoreet dolor, eget facilisis erat
          faucibus non. Aenean eu erat ornare, consectetur orci ut, placerat
          tellus. Maecenas euismod congue erat, eu imperdiet massa fringilla
          vel. Suspendisse ut egestas nunc, vitae aliquam justo. Mauris nibh
          lorem, iaculis et mi a, sagittis molestie justo. Etiam sed hendrerit
          mi, et iaculis diam. Vestibulum auctor ut erat at hendrerit. Praesent
          vel suscipit ante. Vivamus ut rhoncus nisl, id fermentum lectus.
        </p>
        <p>
          Duis luctus dapibus egestas. Proin ac eros lectus. Phasellus
          ullamcorper ipsum nec ipsum tincidunt ullamcorper. Curabitur
          ullamcorper augue scelerisque est suscipit, in consequat velit
          ullamcorper. Mauris luctus elit ut lacinia facilisis. Fusce sagittis
          dictum commodo. Fusce iaculis velit a sapien maximus, ac eleifend dui
          rutrum. Vivamus placerat sem ante, et lacinia ex varius non. In a
          tellus sem. Nulla dolor eros, laoreet non quam vitae, sollicitudin
          gravida lectus. Ut molestie nibh mauris. Morbi tempor diam quis nunc
          porta lobortis. Morbi tempor semper lorem.
        </p>
        <p>
          Maecenas a orci eu sem convallis porttitor ac nec lorem. Integer a
          euismod tortor. Donec ut quam interdum, tempus tellus in, tincidunt
          erat. Suspendisse potenti. Pellentesque blandit nunc quis tristique
          elementum. Ut cursus, ipsum quis luctus malesuada, tortor turpis
          auctor tellus, id consectetur lectus sapien quis sem. Vivamus tempor
          nisi lectus, commodo vestibulum lacus sollicitudin sed. Quisque cursus
          congue porttitor. Mauris placerat velit ac hendrerit porttitor. Etiam
          sed tincidunt mauris. Quisque varius convallis eros. Proin faucibus ex
          non fringilla hendrerit. Nam sit amet ligula fringilla, aliquet lectus
          a, convallis mauris. Morbi id leo feugiat, dapibus erat ultrices,
          mollis tortor.
        </p>
      </>
    </div>
  );
}

export default Guide;
