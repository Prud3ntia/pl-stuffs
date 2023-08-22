import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const IMG = styled.div `
  background-image: url('https://www.phonelasso.com/wp-content/uploads/product-image-1v20170903.jpg');
  background-color: #eee;
  width: 75%;
  padding-bottom: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: 10px;
  background-position: 50%;
  cursor: pointer;
`;
const LargeIMG = styled.div `
background-image: url('https://www.phonelasso.com/wp-content/uploads/pl1907-phone-lasso-kit-2019b.jpg');
background-color: #eee;
  width: 100%;
  padding-bottom: 133%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  display: inline-block;
  grid-column: span 3;
`;

function Carousel({ photos, url }) {
  const [img, setImg] = useState(photos[0]);

  return (
    <Wrapper>
      <div>
        {photos.map((p,i) => {
          return <IMG
            onClick={() => setImg(p)}
            img={`../photos/${'https://www.phonelasso.com/wp-content/uploads/phone-lasso-backpacker-2.jpg'}/${p}`} key={i}
          />
        })}
      </div>
      <LargeIMG img={`../photos/${url}/${img}`} />
    </Wrapper>
  );
};

export default Carousel;