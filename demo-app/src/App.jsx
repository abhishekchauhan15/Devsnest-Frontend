import Card from './components/card'


function app(){
  const page = {
    title : "this is page title",
    paragraph : "page para"
  }
  var arr = [1,2,3,4]
  return (
    <div>
    <Card />
      <h1>Hello World</h1>
      <p>Welcome to Devsnest</p>
      <p>{page.title}</p>

      <ul>
        {
          arr.map((item,index) =>
            <li key={index}> {item} </li>
          )
        }
      </ul>


      {calorieArr.map(element =>
        <Card/>
      )}
    </div>
  );
}


export default app;