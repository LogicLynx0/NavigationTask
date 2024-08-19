import { useParams } from "react-router-dom";


const ResultAPI = ({data}) =>{
    
    const {itemId} = useParams();
    const item = data.find((d) => d.id === parseInt(itemId))
    console.log('@@@dataat', item);
   

    return(
        <>
            <h3>Result</h3>
            <table border='2px' width='50%'>
                <tr>
                    <th>User Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
                <tr>
                    <td>{item?.userId}</td>
                    <td>{item?.title}</td>
                    <td>{item?.body}</td>
                </tr>
            </table>
        </>        
    )
}
export default ResultAPI;