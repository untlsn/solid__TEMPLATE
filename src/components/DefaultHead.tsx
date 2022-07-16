import { Meta, Title } from 'solid-meta';

function DefaultHead() {
  return (
    <>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="theme-color" content="#000000" />
      <Link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
      <Title>App</Title>
    </>
  );
}

export default DefaultHead;
