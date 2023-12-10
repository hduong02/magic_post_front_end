import { useNavigate, useParams } from "react-router-dom";
import CustomerSingle from "../../components/single/CustomerSingle"
import { transportStatusMap } from "../../data/customerData"
import "./product.scss";


const CustomerTransportStatus = () => {

  //Fetch data and send to Single Component
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate('/myOrder');
  };

  const transportStatus = transportStatusMap[String(id)];

  return (
    <div className="product">
      <button onClick={handleBack}>Back</button>
       <CustomerSingle {...transportStatus}/>
    </div>
  )
}

export default CustomerTransportStatus