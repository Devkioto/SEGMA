import React from 'react';

function Watch({ WatchList }) {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {WatchList.map((item , index) => (
                <div  className='cursor-pointer' key={index}>
                    <img src={item.image}    className='w-60' />
                    <p className='text-lg text-gray-600 text-center'>{item.name}</p>
                    <p className='text-gray-600 text-lg text-center'>{item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Watch;

