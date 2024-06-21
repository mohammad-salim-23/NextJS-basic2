import Link from 'next/link';
import React from 'react';
const getPosts = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}
const postPage =async () => {
   
    const postsData = await getPosts()
    console.log(postsData);
    return (
        <div className="">
            <h6>All Posts</h6>
            <div className='grid grid-cols-4 gap-6'>
                {
                    postsData?.slice(0,20).map(({title,id,body})=>{

                      return (
                        <div key={id} className="border-2 p-6">
                        <h6>{title}</h6>
                        <h5>{body}</h5>
                        <button className='btn p-2 bg-red-500'><Link href={`/posts/${id}`}>See Details</Link></button>
                              </div>
                      )
                    })
                }
            </div>
        </div>
    );
};
export default postPage;