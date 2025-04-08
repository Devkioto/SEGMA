import React from 'react';

function Watch({ WatchList }) {
    
    return (
        <div className='flex flex-wrap justify-center gap-4 content-center'>
            {WatchList.map((item , index) => (
                <div  className='cursor-pointer' key={index}>
                    <img src={item.img}    className='w-60' />
                    <p className='text-lg text-gray-600 text-center'>{item.name}</p>
                    <p className='text-gray-600 text-lg text-center'>{item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Watch;

