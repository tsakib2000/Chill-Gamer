
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyReviewTable = ({ review,setMyReview,myReview }) => {

  const { _id, title, photo, description, genre,rating } = review;
  const handleDelete=id=>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://chill-gamer-server-sage.vercel.app/reviews/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your review  has been deleted.",
                        icon: "success"
                      });
        
                    const remaining=myReview.filter(review=> review._id !== id );
                    setMyReview(remaining)
                }
                
            })
        }
      });

  }

  return (<>
 
    <tr>
      <th></th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={photo} alt={title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">Genre:{genre}</div>
          </div>
        </div>
      </td>
      <td className="w-18">
        {description.slice(0, 200)}

        <Link className="text-rose-300 font-bold" to={`/reviewDetails/${_id}`}>
           Read More...
        </Link>
      </td>
      <td>{rating}</td>
      <th className="flex">
        <Link to={`/updateReview/${_id}`} className="btn bg-rose-200 btn-xs">Update</Link>
        <button onClick={()=>handleDelete(_id)} className="btn bg-rose-200 btn-xs">Delete</button>
      </th>
    </tr>

   {/* Modal */}



    
    </>
  );
};

export default MyReviewTable;
