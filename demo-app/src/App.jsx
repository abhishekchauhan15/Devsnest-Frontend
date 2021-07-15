import Card from './components/card'


function app(){
  const page = {
    title : "this is page title",
    paragraph : "page para"
  }
  return (
    <div>
    <Card />
      <h1>Hello World</h1>
      <p>Welcome to Devsnest</p>
      <p>{page.title}</p>
    </div>
  );
}


export default app;