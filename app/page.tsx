import axios from "axios"

export default async function Home() {
  const data=await getAll()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.map((item:any)=>{
        return(
          <h1 key={item.id}>{item.name}</h1>
        )
      })}
    </main>
  )
}

const getAll=async()=>{
  const data=await axios.get('https://jsonplaceholder.typicode.com/users')
  return data.data
}
