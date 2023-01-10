import React from 'react'

async function getEntries(){
    let allEntries = await fetch("https://api.publicapis.org/entries");
    let justEntries = await allEntries.json()
    return justEntries?.entries
}

export default async function DataTable() {

  const rows = await getEntries()


  return (
    
        <div className='max-w-[1240px] w-full   mx-auto flex justify-center items-center overflow-y-auto'>
            <table className='table-fixed'>
                <thead>
                    <tr className=' text-left'>
                        <th className='uppercase'>#</th>
                        <th className='uppercase'>Name</th>
                        <th className='uppercase'>Description</th>
                        <th className='uppercase'>Auth</th>
                        <th className='uppercase'>HTTPS</th>
                        <th className='uppercase'>Cors</th>
                        <th className='uppercase'>Link</th>
                        <th className='uppercase'>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row,i)=>{
                        return  <tr key={i + 1}>
                                    <td>{i}</td>
                                    <td>{row?.API}</td>
                                    <td>{row?.Description}</td>
                                    <td>{row?.Auth ? row?.Auth : "Unkown"}</td>
                                    <td>{row?.HTTPS ? "YES" : "NO"}</td>
                                    <td>{row?.Cors}</td>
                                    <td>{row?.Link}</td>
                                    <td>{row?.Category}</td>
                                </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
  )
}
