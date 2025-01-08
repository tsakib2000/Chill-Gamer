import React from 'react';

const WatchListTable = ({watch}) => {
    const{photo,title,genre,description,rating}=watch
    return (
                    <><tr>
                            
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-16 w-16">
                <img
                  src={photo}
                  alt={title} />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{genre}</div>
            </div>
          </div>
        </td>
        <td>
{
    description.slice(0,300)
}

        </td>
        <td>{rating}</td>
      
        </tr></>
      
    );
};

export default WatchListTable;