
import { useNavigate } from "react-router-dom";

const DummyAPI = ({data}) =>{
    
    const navigate = useNavigate();

    const itemDetails = (post) =>{
        console.log('Item Detail', post);
        console.log('$$$', post.id);
        navigate(`/select-item-detail/${post.id}`);
    }
    return (
      <>
        <h2>Data</h2>
        {data.map(post => (
            

            <h5 onClick={()=> itemDetails(post)}>{post.title}</h5>
           
            ))}
            
           

      </>
    )
}
export default DummyAPI;