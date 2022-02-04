import React from 'react';
import Container from '../../components/Container';
import Topbar from '../../components/Topbar';

export default function Home() {
  return (
    <div>
      <Topbar />
      <section className="bg-black py-24">
        <Container>
          <div
            className="w-full h-[597px] bg-cover relative rounded-xl overflow-hidden"
            role="img"
          >
            <img
              className="absolute left-0 right-0 object-cover object-center align-bottom w-full h-full"
              alt="황혼이 질 무렵 독특한 모양의 돔하우스 입구에 한 게스트가 서서 따스하고 아늑한 빛을 온몸으로 받으며 손을 흔들고 있습니다."
              src="https://a0.muscache.com/im/pictures/ce7d8ae6-977b-4031-b800-762ac4daf347.jpg?im_w=1920"
            />
          </div>
        </Container>
      </section>
      <section className="h-96"></section>
    </div>
  );
}
